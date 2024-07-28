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
    <div className="flex flex-col justify-between items-center space-y-4 py-6 mt-10 max-w-[60vw] max-lg:max-w-[80vw] mx-auto overflow-hidden">
      <div className=" w-full flex justify-between p-4">
        <div className="flex items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="46px"
              viewBox="0 -960 960 960"
              width="46px"
              fill="#581c87"
            >
              <path d="M160-360q-50 0-85-35t-35-85q0-50 35-85t85-35v-80q0-33 23.5-56.5T240-760h120q0-50 35-85t85-35q50 0 85 35t35 85h120q33 0 56.5 23.5T800-680v80q50 0 85 35t35 85q0 50-35 85t-85 35v160q0 33-23.5 56.5T720-120H240q-33 0-56.5-23.5T160-200v-160Zm200-80q25 0 42.5-17.5T420-500q0-25-17.5-42.5T360-560q-25 0-42.5 17.5T300-500q0 25 17.5 42.5T360-440Zm240 0q25 0 42.5-17.5T660-500q0-25-17.5-42.5T600-560q-25 0-42.5 17.5T540-500q0 25 17.5 42.5T600-440ZM320-280h320v-80H320v80Zm-80 80h480v-480H240v480Zm240-240Z" />
            </svg>
          </div>
          <div className="ml-3">
            <div className="font-semibold text-xl text-purple-900">AI Bot</div>
            <div className="text-sm text-green-500">Online</div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32px"
              viewBox="0 -960 960 960"
              width="32px"
              fill="#581c87"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32px"
              viewBox="0 -960 960 960"
              width="32px"
              fill="#581c87"
            >
              <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
            </svg>
          </div>
        </div>
      </div>

      <div className=" p-6 rounded-lg w-full max-w-2xl flex flex-col">
        <div className="flex-1 overflow-y-auto my-4 p-4"></div>

        <div className="grid grid-cols-2 gap-8 mb-4 overflow-hidden">
          {suggestedResponses.map((response, index) => (
            <button
              key={index}
              className="bg-gray-100 p-3 rounded-lg text-gray-800 max-md:text-sm  hover:bg-gray-300"
              onClick={() => setInput(response)}
            >
              {response}
            </button>
          ))}
        </div>

        <div className="flex items-center pt-4 mt-24">
          <button className="w-full flex justify-around pr-4 max-sm:pr-20 items-center p-2 rounded-full bg-purple-600 hover:bg-black">
            <input
              type="text"
              className="flex-1 rounded-l-full py-2 px-4 focus:outline-none bg-inherit text-white max-sm:text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Text here..."
            />
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25px"
                viewBox="0 -960 960 960"
                width="25px"
                fill="white"
                className="max-sm:hidden"
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
                onClick={() => sendMessage(input)}
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
