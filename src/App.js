import { BrowserRouter, Routes, Route } from "react-router-dom";
import Routing from "./routing";
import MainApp from "./mainApp";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Routing />}/>
          <Route path="/mainApp" element={<MainApp />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
