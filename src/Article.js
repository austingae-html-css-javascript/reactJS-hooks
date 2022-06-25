import React from 'react'

import "./Article.css";

import { useState } from "react";

const Article = (props) => {
  let [isReadMoreClicked, setIsReadMoreClicked] = useState(false);
  let [readMoreOrReadLessButton, setReadMoreOrReadLessButton] = useState("Read More");
  return (
    <main>
      <div className='article'>
        <h2 className='article__title'>{props.title}</h2>
        {isReadMoreClicked ? <p className='article__content'>{props.text}</p> : <p className='article__content'>{props.text.substring(0,100)}</p>}
        <button className='article__read-more-button' 
        onClick={() => {
          if (readMoreOrReadLessButton == "Read More") {
            setIsReadMoreClicked(true);
            setReadMoreOrReadLessButton("Read Less");
          }
          else if (readMoreOrReadLessButton == "Read Less") {
            setIsReadMoreClicked(false);
            setReadMoreOrReadLessButton("Read More");            
          }

        }}>{readMoreOrReadLessButton}</button>
      </div>
    </main>
  );
}

export default Article

/*
HTML & CSS & Javascript Approach: 
  1) Mobile First Approach - Yes. 
  2) Create the HTML layout - Yes. 
  - 
  <section>
    <div class="container">
    </div>
  </section>
  3) Create the HTML elements - Yes. 
  4) Decorate the HTML elements - Yes. 
  If * {box-sizing: content-box}
  - Parent Div's Width = Child Div's Width+Padding+Border+Margin
  - Parent Div's Width = Block Element's Width+Padding+Border+Margin
  - However, Parent Div's Width != Inline Element's Width+Padding+Border+Margin
  5) Javascript - Yes. 
*/
