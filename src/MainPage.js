import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mainPage.css";
import NavBar from "./NavBar";
import axios from "axios";
import { generate } from "random-words";
import API_KEY from "./ApiKey";
import HOST from "./Host";
import SideBar from "./SavedWords";
import WordAndDefinitions from './Words';
import URL from "./Url";

const MainPage = () => {
  const [word, setWord] = useState();
  const [data, setData] = useState(null);
  const [newWord, setNewWord] = useState(generate());

  // state component for Sidebar
  const [wordList, setWordList] = useState([]);

  const generateNewWord = () => {
    setNewWord(generate());
  };

  // adds the current Generated word on screen to the word list
  const addWord = () => {
    setWordList([...wordList, word]);
  };

  //json format may change,for example with word nor
  const url = URL + newWord;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": HOST,
    },
  };

  useEffect(() => {
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
  }, [newWord]);

  return (
    <Container fluid className="main-page-container bg-dark text-light">
      <NavBar page="/main" />
      <Row className="align-items-center main-page-row">
        <Col className="text-center">
          <Button
            variant="primary"
            className="generate-btn"
            onClick={generateNewWord}
          >
            Generate
          </Button>
          <WordAndDefinitions data={data} handleNewWord={generateNewWord}/>
          <Button
            variant="primary"
            className="add-btn"
            onClick={addWord}
          >
            Add
          </Button>
        </Col>
        <Col>
          <div className="sidebar">
            <SideBar
              wordList={wordList}
              setWordList={setWordList}/>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
