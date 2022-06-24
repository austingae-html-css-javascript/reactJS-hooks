import React from 'react'

import { useState } from 'react';

import "./Article.css";

const Article = (props) => {

  let [isReadMoreButtonClicked, setIsReadMoreButtonClicked] = useState(false);
  let [readMoreReadLessButton, setreadMoreReadLessButton] = useState("Read More")
  return (
    <main>
      <h2>{props.title}</h2>
      {isReadMoreButtonClicked ? <p>{props.text}</p> : <p>{props.text.substr(0,100)}</p>}
      <button onClick={() => {
        if (readMoreReadLessButton == "Read More") {
          setIsReadMoreButtonClicked(true);
          setreadMoreReadLessButton("Read Less");
        }
        else if (readMoreReadLessButton == "Read Less") {
          setIsReadMoreButtonClicked(false);
          setreadMoreReadLessButton("Read More");
        }


      }}>{readMoreReadLessButton}</button>
    </main>
  );
}

export default Article

/*
1) Mobile First Approach - Yes. 
2) Create the HTML Layout - Yes. 
3) Create the HTML elements - Yes. 
4) Decorate the HTML elements in CSS - Yes. 
*/
