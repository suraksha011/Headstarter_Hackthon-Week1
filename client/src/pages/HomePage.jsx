import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-6 max-w-[50vw] mx-auto my-16 border">
      <h2 className="text-3xl font-bold tracking-wider">AI Assistant</h2>
      <p>
        This chatbot helps you manage your work schedule efficiently. You can
        ask about your weekly tasks and their timings, it will provide detailed
        information. Additionally, you can inquire about specific tasks assigned
        to you, and the chatbot will elaborate on each task, offering clear
        descriptions and necessary details to help you stay organized ona top of
        your responsibilities.
      </p>
      <img src="/bot.jpg" alt="bot" className="w-[500px]" />
      <NavLink to="/chatpage">
        Continue
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="red"
        >
          <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
        </svg>
      </NavLink>
    </div>
  );
};

export default HomePage;
