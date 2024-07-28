import { useState, useRef, useEffect } from 'react';
import { SearchIcon, BellIcon } from '@heroicons/react/outline';

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { text: "Hey Bot, How are you today?", sender: 'user' }
  ]);
  const [input, setInput] = useState('');

  const suggestedResponses = [
    "What are my tasks for this week?",
    "Any deadlines this week?",
    "When is my meeting on Tuesday?",
    "Do I have any meetings today?",
    "Can you summarize today's news?",
    "Tell me a fun fact."
  ];

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (message) => {
    if (message.trim() !== '') {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setInput('');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
            <div className="ml-3">
              <div className="font-semibold text-gray-800">AI Bot</div>
              <div className="text-sm text-green-500">Online</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <SearchIcon className="h-6 w-6 text-gray-600" />
            <BellIcon className="h-6 w-6 text-gray-600" />
          </div>
        </div>

        {/* Messages Display Area */}
        <div className="flex-1 overflow-y-auto my-4 p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-3 my-2 rounded-lg max-w-xs ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white self-end'
                  : 'bg-gray-200 text-gray-800'
              }`}
              style={{ alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start' }}
            >
              {message.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Responses */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {suggestedResponses.map((response, index) => (
            <button
              key={index}
              className="bg-gray-200 p-2 rounded-lg text-gray-800 hover:bg-gray-300"
              onClick={() => sendMessage(response)}
            >
              {response}
            </button>
          ))}
        </div>

        {/* Input Area */}
        <div className="flex items-center border-t border-gray-300 pt-4">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-l-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage(input)}
            placeholder="Type a message..."
            aria-label="Type a message"
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-r-full hover:bg-blue-600"
            onClick={() => sendMessage(input)}
            aria-label="Send message"
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

export default ChatPage;
