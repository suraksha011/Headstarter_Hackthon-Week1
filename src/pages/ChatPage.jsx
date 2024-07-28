import { useState } from "react";
import { useNavigate } from "react-router-dom";
import suggestedResponses from "../data";

const ChatPage = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const sendMessage = (message) => {
    if (message.trim() !== "") {
      navigate("/finalpage", { state: { message } });
      setInput("");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 overflow-hidden">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
            <div className="ml-3">
              <div className="font-semibold text-gray-800">AI Bot</div>
              <div className="text-sm text-green-500">Online</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="h-6 w-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
              &#x1F50D;
            </div>
            <div className="h-6 w-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
              &#x1F514;
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto my-4 p-4"></div>

        {/* Suggested Responses */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {suggestedResponses.map((response, index) => (
            <button
              key={index}
              className="bg-gray-200 p-2 rounded-lg text-gray-800 hover:bg-gray-300"
              onClick={() => setInput(response)}
            >
              {response}
            </button>
          ))}
        </div>

        {/* Input Area */}
        <div className="flex items-center border-t border-gray-300 pt-4">
          <button className="w-full flex justify-around pr-4 items-center p-2 rounded-full bg-purple-900 hover:bg-black">
            <input
              type="text"
              className="flex-1 rounded-l-full py-2 px-4 focus:outline-none bg-inherit text-white"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Hey Bot, How are you today?"
            />
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25px"
                viewBox="0 -960 960 960"
                width="25px"
                fill="white"
              >
                <path
                  d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 
              85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0
               83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 
               0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26px"
                viewBox="0 -960 960 960"
                width="26px"
                fill="white"
              >
                <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
