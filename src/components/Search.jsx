import React, { useState } from "react";
import getImages from "../requests/getImages";
import PropTypes from "prop-types";
import "../styles/search.css";

function Search({ setSearchResults, setInitialise }) {
  const [searchText, setSearchText] = useState("")

  const handleSubmit = async(event) => {
    event.preventDefault()
    setSearchResults(await getImages(searchText))
    setInitialise(true)
  }

  return(
    <div>
      <form className="input-search" onSubmit={handleSubmit}>
        <input className="search-box" type="text" placeholder="Search..." onChange={(event) => setSearchText(event.target.value)}></input>
        <button className="search-button" type="submit">Search...</button>
      </form>
    </div>
  )
}

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
}

export default Search;