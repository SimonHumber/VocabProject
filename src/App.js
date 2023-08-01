import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { generate, count } from "random-words";
import API_KEY from "./ApiKey";
import HOST from "./Host";

function App() {
  const [data, setData] = useState(null);
  const newWord = generate();
  //json format may change,for example with word nor
  const url = "https://wordsapiv1.p.rapidapi.com/words/" + newWord;
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
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <pre>{JSON.stringify(data)}</pre>
          <p>{data["word"]}</p>
          <p>{data["results"][0]["definition"]}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
