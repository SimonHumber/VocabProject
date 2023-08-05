import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './NavBar';

const DictionaryPage = () => {
  return (
    <Container fluid className="dictionary-page-container mt-5 bg-dark text-light">
      <NavBar />
      <h1>Dictionary</h1>
      {/* Add the search bar here */}
      {/* Replace this with your own implementation */}
    </Container>
  );
};

export default DictionaryPage;
