import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const MainPage = () => {
  const [word, setWord] = useState('');

  const generateNewWord = () => {
    // Replace this with your own logic to generate a new word
    const newWord = 'ExampleWord';
    setWord(newWord);
  };

  const saveWord = () => {
    // Replace this with your own logic to save the word
    // You can save it to an array and display the list on the right-hand side
  };

  return (
    <Container className="mt-5">
      <h1>Word: {word}</h1>
      <Button variant="primary" onClick={generateNewWord}>
        Generate
      </Button>
      <Button variant="success" className="ml-3" onClick={saveWord}>
        Save
      </Button>
      {/* Add the word list on the right-hand side */}
      {/* Replace this with your own implementation */}
    </Container>
  );
};

export default MainPage;
