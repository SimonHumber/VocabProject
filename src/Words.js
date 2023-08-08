import React, { useEffect, useState } from "react";
import axios from "axios";
import { generate } from "random-words";

const ApiComponent2 = () => {
  const [data, setData] = useState(null);
  const [newWord, setNewWord] = useState(generate()); // Track the current word

  const url = URL + newWord;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e7d3d20c19msh9909da35cc85505p1c98c1jsn6c2e7f6dc962",
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
    },
  };

  const fetchWordData = async () => {
    try {
      const response = await axios.get(url, options);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWordData();
  }, [newWord]); // Run the effect whenever newWord changes

  const handleNewWord = () => {
    const newWord = generate();
    setNewWord(newWord); // Update state with the new word, triggering the effect
  };

  return (
    <div>
      <p>Word: {data && data.word}</p>
      <p>Definition: </p>

      <div>
        {data &&
          data.results &&
          data.results.map((result, index) => (
            <span key={index}>
              {result.definition}
              {index !== data.results.length - 1 && ", "}
              <br />
              <br />
            </span>
          ))}
      </div>
      <button onClick={handleNewWord}>New Word</button>
    </div>
  );
};

export default ApiComponent2;
