import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './welcomePage.css';

const WelcomePage = () => {

  const handleGoToMainPage = () => {
  };

  return (
    <Container fluid className="welcome-page-container bg-dark">
      <h1 className="welcome-title text-primary">Welcome to the word generation app</h1>
      <Button variant="primary" onClick={handleGoToMainPage}>Start your journey!</Button>
    </Container>
  );
};

export default WelcomePage;