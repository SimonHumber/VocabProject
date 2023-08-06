import { useState } from "react";

export default function SavedWords() {
  const [word, setWord] = useState("");
  const [wordList, setWordList] = useState([]);
  return (
    <div>
      <AddWord
        wordList={wordList}
        setWordList={setWordList}
        word={word}
        setWord={setWord}
      />
      <Words wordList={wordList} setWordList={setWordList} />
    </div>
  );
}

function Words(props) {
  return (
    <div>
      {props.wordList.map((word) => {
        return (
          <div>
            {word}{" "}
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
  return <button onClick={deleteWord}>Delete</button>;
}

function AddWord(props) {
  const [newWord, setNewWord] = useState("");
  const addWord = () => {
    props.setWordList([...props.wordList, newWord]);
  };

  return (
    <div>
      <input
        id="input"
        placeholder="Add a word"
        type="text"
        onChange={(event) => setNewWord(event.target.value)}
      />
      <br />
      <button onClick={addWord}>Add Word</button>
    </div>
  );
}
