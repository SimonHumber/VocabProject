import React from 'react';
import WelcomePage from './WelcomePage';
import MainPage from './MainPage';
import DictionaryPage from './DictionaryPage';

const App = () => {
  return (
    <div>
      Welcome Page
    <WelcomePage />
    Main Page
    <MainPage />
    {/* <DictionaryPage /> */}
    </div>
  );
};

export default App;
