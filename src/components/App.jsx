import { React, useState, useEffect } from "react";
import Header from "./Header";
import Search from "./Search";
import SearchResults from "./SearchResults";
import { throttle } from 'lodash';

function App() {
  const [level, setLevel] = useState("shallow")
  const [searchResults, setSearchResults] = useState([])
  const [initialise, setInitialise] = useState(false)

  const handleScroll = throttle(() => {
    console.log("scrolling")
    if (window.scrollY > 500) {
      setLevel("deep")
      console.log("level = ", level )
    } else if (level === "deep" && window.scrollY <= 500) {
      setLevel("shallow")
      console.log("level = ", level)
    }
  }, 500)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [level, handleScroll])

  return (
    <div className="app">
      { level === "shallow" && <Header /> }
      <Search setSearchResults={setSearchResults} setInitialise={setInitialise} />
      {initialise && < SearchResults results={searchResults} />}
    </div>
  );
}

export default App;
