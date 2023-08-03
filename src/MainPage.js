import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const WelcomePage = () => {
    const navigate = useNavigate();

    const handleGoToMainPage = () => {
    navigate('/main');
  };

  return (
    <div className="container mt-5">
      <h1>Welcome to My Word App</h1>
      <button className="btn btn-primary" onClick={handleGoToMainPage}>
        Go
      </button>
    </div>
  );
};

export default WelcomePage;
