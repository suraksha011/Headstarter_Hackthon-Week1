import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const FinalPage = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const { message } = location.state || { message: '' };
  const [messages, setMessages] = useState([
    { text: "Hello! I'm good. How can I assist you?", sender: 'bot' },
    { text: message, sender: 'user' },
    { text: "You have four deadlines this week.", sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = (message) => {
    if (message.trim() !== '') {
      setIsLoading(true);
      setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'user' }]);
      fetch("http://127.0.0.1:8000/answer_question/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          question: message,
        })
      })
      .then((response) => response.json())
      .then(data => {
        setIsLoading(false);
        setMessages((prevMessages) => [...prevMessages,  { text: data.answer, sender: 'bot' }]);
        setInput('');
      }).catch(err => {
        console.error(err);
      })
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7m-4-4h8M7 10a5 5 0 0110 0v2a5 5 0 01-10 0v-2z"></path>
              </svg>
            </div>
            <div className="ml-3">
              <div className="font-semibold text-gray-800">AI Bot</div>
              <div className="text-sm text-green-500">Online</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354v1.042a7 7 0 106.918 9.573l.926.371A9 9 0 1112 2.708v1.042z"></path>
            </svg>
            <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2m8-4h-4m4 0v4m0-4h4m-8 0H7m1 10h8m-8 4h8m-8-8h8"></path>
            </svg>
          </div>
        </div>

        {/* Messages Display Area */}
        <div className="flex-1 overflow-y-scroll my-4 p-4" style={{ height: '400px' }}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`}
            >
              <div
                className={`p-3 rounded-3xl shadow-sm max-w-md ${message.sender === 'user'
                  ? 'bg-gray-200 text-gray-800 text-right'
                  : 'bg-gray-200 text-gray-800 text-left'
                  }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="flex items-center border-t border-gray-200 pt-4">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-full p-3 focus:outline-none focus:ring-2"
            style={{ backgroundColor: 'rgb(99,110,207)', color: 'white' }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage(input)}
            placeholder="Type your message..."
          />
          <button
            className="bg-purple-500 text-white p-3 rounded-full ml-2 hover:bg-purple-600"
            onClick={() => sendMessage(input)}
            disabled={isLoading}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalPage;
