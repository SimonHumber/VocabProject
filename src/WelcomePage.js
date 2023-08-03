import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const WelcomePage = () => {
//   const navigate = useNavigate();

  const handleGoToMainPage = () => {
    // navigate('/main');
  };

  return (
    <Container className="mt-5">
      <h1>Welcome to My Word App</h1>
      <Button variant="primary" onClick={handleGoToMainPage}>
        Go
      </Button>
    </Container>
  );
};

export default WelcomePage;
