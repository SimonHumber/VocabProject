import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mainPage.css'
import NavBar from './NavBar';

const MainPage = () => {

  const [word, setWord] = useState('');

  const generateNewWord = () => {
    // generate word code
  };

  const saveWord = () => {
    // save word code
  };

  useEffect(()=>{
    // API call
  }, [])

  return (
    <Container fluid className="main-page-container bg-dark text-light">
      <NavBar />
      <Row className="justify-content-center align-items-center main-page-row">
        <Col className="text-center">
        <Button variant="primary" className="generate-btn" onClick={generateNewWord}>Generate</Button>
          <h1 className="word">Word</h1>
          <p className="definition">Definition of the Word</p>
          <Button variant="primary" className="add-btn" onClick={saveWord}>Add</Button>
        </Col>
        <Col>
          <div className="sidebar">
            <Form className="mb-3">
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
