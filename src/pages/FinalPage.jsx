import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const FinalPage = () => {
  const location = useLocation();
  const { message } = location.state || { message: '' };
  const [messages, setMessages] = useState([
    { text: "Hello! I'm good. How can I assist you?", sender: 'bot' },
    { text: message, sender: 'user' },
    { text: "You have four deadlines this week.", sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

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
            <div className="h-6 w-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">&#x1F50D;</div>
            <div className="h-6 w-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">&#x1F514;</div>
          </div>
        </div>

        {/* Messages Display Area */}
        <div className="flex-1 overflow-y-auto my-4 p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-3 my-2 rounded-lg max-w-xs ${message.sender === 'user'
                ? 'bg-blue-500 text-white ml-auto'
                : 'bg-gray-200 text-gray-800 mr-auto'
                }`}
              style={{ alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start' }}
            >
              {message.text}
            </div>
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
            placeholder="When is my meeting on Tuesday?"
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-l-full hover:bg-blue-600"
            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7m-4-4h8M7 10a5 5 0 0110 0v2a5 5 0 01-10 0v-2z"></path>
            </svg>
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded-r-full hover:bg-blue-600 flex items-center"
            onClick={() => sendMessage(input)}
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

