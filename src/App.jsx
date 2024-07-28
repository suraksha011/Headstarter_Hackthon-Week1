import { HomePage, ChatPage, FinalPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chatpage" element={<ChatPage />} />
        <Route path="/finalpage" element={<FinalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
