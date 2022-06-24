import logo from './logo.svg';
import './App.css';

import { useRef } from "react";

function App() {

  const inputRef = useRef(null);

  return (
    <>
      <input type="text" placeholder="Type" ref={inputRef}></input>
      <button onClick={() => {
         inputRef.current.value = "";
      }}>Change Name</button>
    </>
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
