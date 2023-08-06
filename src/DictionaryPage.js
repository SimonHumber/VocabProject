import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavBar from './NavBar';
import './dictionaryPage.css'
import SearchApiWords from './searchApiWords';

const DictionaryPage = () => {
  return (
    <Container fluid className="dictionary-page-container bg-dark text-light">
      <NavBar />
      <Row className="align-items-center dictionary-page-row">
        <Col>
          {/* <h1 className="dictionary">Dictionary</h1>
          <Form className="mb-3">
            <Form.Control className="dictionary-search-bar"type="text" placeholder="Search..." />
          </Form>
          <Button variant="primary" className="search-btn">Search</Button> */}
          <SearchApiWords />
        </Col>
      </Row>
    </Container>
  );
};

export default DictionaryPage;