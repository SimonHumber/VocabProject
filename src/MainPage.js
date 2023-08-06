import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mainPage.css'
import NavBar from './NavBar';
import axios from "axios";
import { generate, count } from "random-words";
import API_KEY from "./ApiKey";
import HOST from "./Host";
import SideBar from './SavedWords'

const MainPage = () => {

  const [word, setWord] = useState();
  const [data, setData] = useState(null);
  const [newWord, setNewWord] = useState(generate());

  const generateNewWord = () => {
    setNewWord(generate());
  };

  const saveWord = () => {
    // save word code
  };

  //json format may change,for example with word nor
  const url = "https://wordsapiv1.p.rapidapi.com/words/" + newWord;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": HOST,
    },
  };

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get(url, options);
        setData(response.data);
        setWord(response.data["word"]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [newWord])

  return (
    <Container fluid className="main-page-container bg-dark text-light">
      <NavBar />
      <Row className="align-items-center main-page-row">
        <Col className="text-center">
        <Button variant="primary" className="generate-btn" onClick={generateNewWord}>Generate</Button>
        <div>
          <p>Word: {word}</p>
          <div>
            {data &&
              data.results &&
              data.results.map((result, index) => (
                <span key={index}>
                  <p>
                    Definition {index + 1}:&nbsp;
                    {result.definition}
                    {index !== data.results.length - 1 && ", "}
                    <br />
                  </p>
                </span>
              ))}
          </div>
        </div>
          <Button variant="primary" className="add-btn" onClick={saveWord}>Add</Button>
        </Col>
        <Col>
          {/* <div className="sidebar">
            <Form className="mb-3">
              <Form.Control type="text" placeholder="Search..." />
            </Form>
            <ul className="word-list">
              <li>Word1</li>
              <li>Word2</li>
            </ul>
          </div> */}
          <SideBar />
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
