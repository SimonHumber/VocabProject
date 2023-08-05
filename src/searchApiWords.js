import React, { useEffect, useState } from "react";
import API_KEY from "./ApiKey";
import HOST from "./Host";
import URL from "./Url";

const SearchApiWords = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [actualQuery, setActualQuery] = useState(""); // New state variable for the actual query
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    if (actualQuery !== "") {
      const url = URL + actualQuery;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": HOST,
        },
      };
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          setFetchedData(data);
        })
        .catch((error) => console.error(error));
    }
  }, [actualQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleButtonClick = () => {
    setActualQuery(searchQuery);
  };

  return (
    <div className="App">
      <SearchBar
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        handleButtonClick={handleButtonClick}
      />
      {fetchedData && fetchedData.success === false ? (
        <div>Word not found</div>
      ) : fetchedData &&
        fetchedData.word === actualQuery &&
        fetchedData.results &&
        fetchedData.results.length > 0 ? (
        <div>
          <p>Word: {fetchedData.word}</p>
          {fetchedData &&
            fetchedData.results &&
            fetchedData.results.map((result, index) => (
              <span key={index}>
                <p>
                  Definition[{index + 1}] :{result.definition}
                  {index !== fetchedData.results.length - 1}
                  <br />
                </p>
              </span>
            ))}
        </div>
      ) : null}
    </div>
  );
};

function SearchBar(props) {
  const searchBarStyle = {
    textAlign: "right",
  };
  return (
    <div style={searchBarStyle}>
      <input
        type="text"
        placeholder="Search a Word"
        value={props.searchQuery}
        onChange={props.handleSearchChange}
      />
      <button onClick={props.handleButtonClick}>Search</button>
    </div>
  );
}

export default SearchApiWords;
