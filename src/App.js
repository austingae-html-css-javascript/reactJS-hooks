import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from "react";

function App() {

  const [color, setColor] = useState("blue");

  let changeBGColor = () => {
    setColor(document.querySelector(".color-input").value);
  }

  useEffect(() => {
    console.log("Running...");
  })

  return (
    <main style={{backgroundColor:color}}>
      <input className='color-input'></input>
    <button onClick={changeBGColor}>Click Me!</button>
    </main>
  );
}

export default App;

/*
  1) Mobile First Approach
  2) Create the HTML layout
  <section>
    <div class="container">
    </div>
  </section>
  3) Create the HTML elements
  4) Decorate the HTML elements
    1) Imagine how you want it to look like.
    2) Then use width, padding, border, and margin.
    3) Then calculate: 
        If * {box-sizing: content-box}
        - Parent Div's Width = Child Div's Width+Padding+Border+Margin
        - Parent Div's Width = Block Element's Width+Padding+Border+Margin
        - However, Parent Div's Width != Inline Element's Width+Padding+Border+Margin
*/

/*
import logo from './logo.svg';
import './App.css';

import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  let [showParagraph, setShowParagraph] = useState(true);
  return (
    <>
      <h1>{count}</h1>
      <button 
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
          setShowParagraph(!showParagraph);
        }}>
        Click Me
      </button>

      {showParagraph && <p>I Am Here!</p>}
      
    </>
  );
}

export default App;
*/