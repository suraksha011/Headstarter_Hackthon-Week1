import { HomePage, ChatPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chatpage" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
