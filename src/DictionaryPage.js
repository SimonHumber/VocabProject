import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavBar from './NavBar';
import './dictionaryPage.css'
import SearchApiWords from './searchApiWords';

const DictionaryPage = () => {
  return (
    <Container fluid className="dictionary-page-container bg-dark text-light">
      <NavBar page="/dictionary"/>
      <Row className="align-items-center dictionary-page-row">
        <Col>
          <SearchApiWords />
        </Col>
      </Row>
    </Container>
  );
};

export default DictionaryPage;