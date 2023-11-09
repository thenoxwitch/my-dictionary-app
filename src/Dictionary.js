import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    
    setResults(response.data[0]);
  }

 function search(){
//documentation: https://dictionaryapi.dev/e
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
axios.get(apiUrl).then(handleResponse);

 }


  function handleSubmit(event) {
    event.preventDefault();
    search();
   

    
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }



  if (loaded) {
  return (
    <div className="Dictionary">
      <div className="search-box">
        <section className="Search-Section">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a word here..." onChange={handleKeywordChange} />
      </form>
      <div className="hint">
        Suggested words: charm, glitter, snuggle, bubble...
      </div>
      </section>
      </div>
      
      <Results results={results} />
    </div>
  );
  } else {

    load();
    return "Loading"
  }
}
