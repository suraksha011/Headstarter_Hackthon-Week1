import { NavLink } from "react-router-dom";
import Button from "../components/Button";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 py-6 max-lg:max-w-[80vw] max-w-[60vw] mx-auto mt-10 overflow-hidden">
      <h2 className="max-sm:text-xl max-md:text-2xl text-3xl font-bold text-purple-700 tracking-wider mb-6 drop-shadow-xl">
        Your AI Assistant
      </h2>
      <div className="max-lg:w-[70vw] w-[42vw] mt-4 px-4 py-4 hover:shadow-sm hover:cursor-pointer shadow-black">
        <p className="max-md:text-sm text-md text-purple-700 tracking-normal leading-7 text-justify  drop-shadow-lg">
          This{" "}
          <i className="text-purple-900 border-b border-purple-900">chatbot</i>{" "}
          helps you manage your work schedule efficiently. You can ask about
          your weekly tasks and their timings, it will provide detailed
          information. Additionally, you can inquire about specific tasks
          assigned to you, and the chatbot will elaborate on each task, offering
          clear descriptions and necessary details to help you stay organized
          ona top of your responsibilities.
        </p>
      </div>
      <div>
        <img
          src="/bot.png"
          alt="bot"
          className="max-sm:w-[160px] max-lg:max-w-[250px] w-[300px] animate-bounce max-md:-mb-16"
        />
      </div>
      <NavLink to="/chatpage">
        <Button text="Continue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="white"
          >
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </Button>
      </NavLink>
    </div>
  );
};

export default HomePage;
