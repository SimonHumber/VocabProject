import SearchApiWords from "./searchApiWords.js";
import ApiComponent2 from "./Words.js";

export default function MainApp() {
  return (
    <div className="App">
      <h1>Search for a specific word</h1>
      <SearchApiWords />
      <h1>Generate random word</h1>
      <ApiComponent2 />
    </div>
  );
}
