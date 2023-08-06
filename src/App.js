import React from 'react';
import WelcomePage from './WelcomePage';
import MainPage from './MainPage';
import DictionaryPage from './DictionaryPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    // <div>
    //   Welcome Page
    // <WelcomePage />
    // Main Page
    // <MainPage />
    // Dictionary Page
    // <DictionaryPage />
    // </div>
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />}/>
        <Route path="/main" element={<MainPage />}/>
        <Route path="/dictionary" element={<DictionaryPage />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
};

export default App;
