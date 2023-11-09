import React from "react";
import Synonyms from "./Synonyms.js";
export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) 
      {
        return (
          <div key={index}>
            <p>
             {definition.definition}
            
              <p2> Example: </p2>
              <em>{definition.example}</em>
             <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
