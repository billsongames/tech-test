import React, { useState } from "react";
import "../styles/search.css"

const Search = () => {
  const [searchText, setSearchText] = useState("")

  return(
    <>
      <input className="search-box" type="text" onChange={(e) => setValue(e.target.value)}></input>
    </>
  )
}

export default Search;