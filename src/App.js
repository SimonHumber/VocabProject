import SearchApiWords from "./searchApiWords.js";
import ApiComponent2 from "./Words.js";
import SavedWords from "./SavedWords";

export default function App() {
  return (
    <div className="App">
      <h1>Search for a specific word</h1>
      <SearchApiWords />
      <h1>Generate random word</h1>
      <ApiComponent2 />
      <h1>Saved Words</h1>
      <SavedWords />
    </div>
  );
}
