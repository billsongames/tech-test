import { React, useState } from "react";
import PropTypes from "prop-types";
import ModalImage from "react-modal-image";
import "../styles/searchResults.css";

function SearchResults({ results }) {
  if (!results.length) {
    return (
      <div id="results-heading">
        No results
      </div>
    )
  }  

  
  return(
      <div className="search-results__container">
        <div id="results-heading">{results.length} results</div>
        <div className="image-results">
        {results.map(image =>
          <div className="image-container">
            <a href={image} target="_blank"><img src={image} className="image-results__image" /></a>

          {/* <ModalImage small={image} large={image} hideDownload={true} hideZoom={true} className="image-results__image" /> */}
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