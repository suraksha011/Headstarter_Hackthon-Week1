import requests
import json
import re
from datetime import date
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from dotenv import dotenv_values
from langchain_ollama import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate


config = dotenv_values('.env.local')

app = FastAPI()

origins = ["*"]

def get_channel_msgs(channel_id):
    headers = {
        'authorization' : config['AUTH_ID']
    }
    r = requests.get(f"https://discord.com/api/v9/channels/{channel_id}/messages", headers=headers)
    messages = json.loads(r.text)
    msg_context = []
    pattern = r"\s*<#[0-9]+>\s*"
    for msg in messages:
        if msg['author']['id'] != config['MEE6_ID']:
            new_msg = msg['content']
            while match := re.search(pattern, new_msg):
                ch_id = match.group().strip(" \n\t<#>")
                new_r = requests.get(f"https://discord.com/api/v9/channels/{ch_id}", headers=headers)
                new_msg = re.sub(pattern, ' channel "' + json.loads(new_r.text)['name'] + '" ', new_msg)
            new_msg = re.subn(r"\s*<@?&?[0-9]+>\s*", " ", new_msg)[0]
            msg_context.append(f"SentBy: {msg['author']['username']}\nContent: {new_msg}\nSentAt: {msg['edited_timestamp'] if msg['edited_timestamp'] else msg['timestamp']}")
    return "\n\n".join(msg_context)
    

class Bot():
    def __init__(self, model="llama3"):
        template = """
        You are a Chatbot for Headstarter community. Today's date is {date}. Answer the question based on below context.

        Here is the context: {context}

        Question: {question}

        Answer:
        """
        llm = OllamaLLM(model=model)
        prompt = ChatPromptTemplate.from_template(template=template)
        self.chain = prompt | llm

    def ask(self, context, question):
        return self.chain.with_config(configurable={"llm_temperature": 0.9}).invoke({"context": context, "date": date.today().strftime("%B %d, %Y"), "question": question})
        
class Question(BaseModel):
    question: str

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/answer_question/")
async def answer_question(ques: Question):
    new_bot = Bot()
    context = get_channel_msgs(config['CHANNEL_ID'])
    return { "answer": new_bot.ask(context, ques.question) }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)