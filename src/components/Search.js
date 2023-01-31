import React, { useState } from "react";
import getImages from "../requests/getImages";
import "../styles/search.css";

const Search = ( {setSearchResults} ) => {
  const [searchText, setSearchText] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    setSearchResults(getImages(searchText))
  }

  return(
    <div>
      <form className="input-search" onSubmit={handleSubmit}>
        <input className="search-box" type="text" onChange={(e) => setSearchText(e.target.value)}></input>
        <button className="search-button" type="submit">Search...</button>
      </form>
    </div>
  )
}

export default Search;