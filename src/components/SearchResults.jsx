import { React, useState } from "react";
import PropTypes from "prop-types";
import ModalImage from "react-modal-image";
import "../styles/searchResults.css";

function SearchResults({ results }) {
  if (!results.length) {
    return <p>No results</p>
  }  
  
  return(
      <div className="search-results__container">
        <h2>{results.length} results</h2>
        <div className="image-results">
        {results.map(image =>
          <div className="image-container">
            <img src={image} className="image-results__image" />
          </div>)}
        </div>
      </div>
    )
  }


SearchResults.defaultProps = {
  length: 0,
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf (
    PropTypes.string.isRequired,
  ),
  length: PropTypes.number.isRequired,
}
export default SearchResults;