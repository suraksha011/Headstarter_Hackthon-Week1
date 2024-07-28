import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ChatPage = () => {
  const history = useHistory();
  const [input, setInput] = useState('');

  const suggestedResponses = [
    "What are my tasks for this week?",
    "Any deadlines this week?",
    "When is my meeting on Tuesday?",
    "Any deadlines this week?",
    "Any deadlines this week?",
    "Any deadlines this week?",
  ];

  const handleSuggestedClick = (message) => {
    if (message.trim() !== '') {
      history.push('/final', { message });
    }
  };

  const handleSendClick = () => {
    if (input.trim() !== '') {
      history.push('/final', { message: input });
      setInput('');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
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

        {/* Suggested Responses */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {suggestedResponses.map((response, index) => (
            <button
              key={index}
              className="bg-gray-200 p-2 rounded-lg text-gray-800 hover:bg-gray-300"
              onClick={() => handleSuggestedClick(response)}
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
            onKeyPress={(e) => e.key === 'Enter' && handleSendClick()}
            placeholder="Type a message..."
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-r-full hover:bg-blue-600"
            onClick={handleSendClick}
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
