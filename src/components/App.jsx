import { React, useState } from "react";
import "../styles/app.css";
import Search from "./Search";
import SearchResults from "./SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [initialise, setInitialise] = useState(false)

  return (
    <div className="app">
      <img src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" className="nasa-logo" alt="nasa logo"></img>
      <Search setSearchResults={setSearchResults} setInitialise={setInitialise} />
      {initialise && < SearchResults results={searchResults} />}
    </div>
  );
}

export default App;
