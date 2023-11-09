import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionResponse(response) {
    
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
setPhotos(response.data.photos);
  }

 function search(){
//documentation: https://dictionaryapi.dev/e
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
axios.get(apiUrl).then(handleDictionResponse);

let pexelsApiKey = "Vw7CssoS9CJC6MJz0SUnplSYlDN6ta3H3h0dg9kB344PXMw10itccRc1";
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
let headers =  { Authorization: `Bearer ${pexelsApiKey}`};

axios.get(pexelsApiUrl, { headers: headers,}).then(handlePexelsResponse);

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
      <Photos photos={photos} />
    </div>
  );
  } else {

    load();
    return "Loading"
  }
}
