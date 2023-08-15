import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar';
import './dictionaryPage.css'
import SearchApiWords from './searchApiWords';

const DictionaryPage = () => {
  return (
    <Container fluid className="dictionary-page-container bg-dark text-light">
      <NavBar page="/dictionary"/>
      <Row className="align-items-center dictionary-page-row">
          <SearchApiWords />
      </Row>
    </Container>
  );
};

export default DictionaryPage;