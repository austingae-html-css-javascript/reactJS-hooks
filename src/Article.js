import React from 'react'

import "./Article.css";

import { useState } from "react";

const Article = (props) => {
  let [readMoreOrReadLessWord, setReadMoreorReadLessWord] = useState("Read More");
  return (
    <main>
      <div className='article'> 
        <h3 className='article__title'>{props.title}</h3>
        {(readMoreOrReadLessWord == "Read Less") ? <p className='article__content'>{props.content}</p> : <p className='article__content'>{props.content.substring(0, 100)}</p>}
        <button 
        className='article__button' 
        onClick={() => {
          if (readMoreOrReadLessWord == "Read More") {
            setReadMoreorReadLessWord("Read Less");
          }
          else if (readMoreOrReadLessWord == "Read Less") {
            setReadMoreorReadLessWord("Read More");
          }
        }}
        >{readMoreOrReadLessWord}</button>
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