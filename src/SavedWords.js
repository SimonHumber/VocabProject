import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import API_KEY from "./ApiKey";
import HOST from "./Host";
import URL from "./Url";
import axios from "axios";

export default function SavedWords(props) {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  return (
    <div>
      <AddWord
        wordList={props.wordList}
        setWordList={props.setWordList}
        word={word}
        setWord={setWord}
      />
      <Words
        wordList={props.wordList}
        setWordList={props.setWordList}
        definition={definition}
        setDefinition={setDefinition}
      />
      <Definition definition={definition} setDefinition={setDefinition} />
    </div>
  );
}

function Definition(props) {
  const removeDefinition = () => {
    props.setDefinition("");
  };
  const [data, setData] = useState("");
  const API_URL = URL + props.definition;
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
        const response = await axios.get(API_URL, options);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [props.definition]);
  if (props.definition === "") {
    return <p></p>;
  }
  return (
    <div>
      <br />
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
      <Button onClick={removeDefinition}>Hide Definition</Button>
    </div>
  );
}

function DefinitionButton(props) {
  const getDefinition = () => {
    props.setDefinition(props.word);
  };
  return <Button onClick={getDefinition}>Definition</Button>;
}

function Words(props) {
  return (
    <div>
      {props.wordList.map((word) => {
        return (
          <div style={{marginTop:10, marginBottom:10}}>
            {word}{" "}
            <DefinitionButton
              word={word}
              definition={props.definition}
              setDefinition={props.setDefinition}
            />
            <span style={{ padding: "5px" }}></span>
            <DeleteWord
              word={word}
              wordList={props.wordList}
              setWordList={props.setWordList}
            />
            <br />
          </div>
        );
      })}
    </div>
  );
}

function DeleteWord(props) {
  const deleteWord = () => {
    props.setWordList(props.wordList.filter((word) => word !== props.word));
  };
  return <Button onClick={deleteWord}>Delete</Button>;
}

function AddWord(props) {
  const [newWord, setNewWord] = useState("");
  const addWord = () => {
    props.setWordList([...props.wordList, newWord]);
  };

  return (
    <div>
        <Form.Control
          type="text"
          placeholder="Add a word..."
          onChange={(event) => setNewWord(event.target.value)}/>
      <br />
      <Button onClick={addWord} style={{marginBottom:10}}>Save</Button>
    </div>
  );
}
