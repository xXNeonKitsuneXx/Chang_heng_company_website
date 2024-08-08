import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/homepage";
import { ErrorPage } from "../pages/errorpage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
