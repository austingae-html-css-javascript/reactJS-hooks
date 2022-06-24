import logo from './logo.svg';
import './App.css';

import Article from "./Article";


function App() {

  return (
  <div>
    <Article title="Lorem Potter"text="Commodo cupidatat est aliquip deserunt. Laboris qui deserunt duis Lorem est proident aliquip. Anim dolore qui voluptate ullamco consectetur deserunt aliquip in anim excepteur. Veniam pariatur sit aute officia ex aliquip in enim. Non ut labore proident amet proident sit dolor."/>
  </div>
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
