import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './welcomePage.css';
import { Link } from "react-router-dom";

const WelcomePage = () => {

  const handleGoToMainPage = () => {

  };

  return (
    <Container fluid className="welcome-page-container bg-dark">
      <h1 className="welcome-title">Welcome to the word generation app</h1>
      <Link to="./main">
      <Button variant="primary" onClick={handleGoToMainPage}>Start your journey!</Button>
      </Link>
    </Container>
  );
};

export default WelcomePage;