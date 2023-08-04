import React, { useState } from 'react';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mainPage.css'

const MainPage = () => {
  const [word, setWord] = useState('');

  const generateNewWord = () => {
  };

  const saveWord = () => {
  };

  // return (
  //   <Container className="mt-5">
  //     <h1>Word: {word}</h1>
  //     <Button variant="primary" onClick={generateNewWord}>
  //       Generate
  //     </Button>
  //     <Button variant="success" className="ml-3" onClick={saveWord}>
  //       Save
  //     </Button>
  //     {/* Add the word list on the right-hand side */}
  //     {/* Replace this with your own implementation */}
  //   </Container>
  // );
  return (
    <Container fluid className="main-page-container bg-dark text-light">
      <Row className="justify-content-center align-items-center main-page-row">
        <Col className="text-center">
        <Button variant="primary" className="generate-btn">Generate</Button>
          <h1 className="word">Word</h1>
          <p className="definition">Definition of the Word</p>
          <Button variant="primary" className="add-btn">Add</Button>
        </Col>
        <Col>
          <div className="sidebar">
            <Form className="search-bar mb-3">
              <Form.Control type="text" placeholder="Search..." />
            </Form>
            <ul className="word-list">
              <li>Word1</li>
              <li>Word2</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
