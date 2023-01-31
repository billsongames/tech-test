import { useState } from "react";
import "../styles/app.css";
import Search from "./Search";

const App = () => {
  const [searchResults, setSearchResults] = useState()


  return (
    <div className="app">
      <img src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" className="nasa-logo" alt="nasa logo"></img>
      <Search setSearchResults={setSearchResults} />
    </div>
  );
}

export default App;
