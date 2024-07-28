import { useLocation } from 'react-router-dom';

const FinalPage = ({onClick}) => {
  const location = useLocation();
  const { message } = location.state || { message: "No message provided" };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">{onClick}</h1>
        <div className="p-4 bg-gray-200 rounded-lg">{message}</div>
      </div>
    </div>
  );
};

export default FinalPage;
