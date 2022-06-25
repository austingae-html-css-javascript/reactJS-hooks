import logo from './logo.svg';
import './App.css';

import Article from "./Article";


function App() {

  return (
  <div>
    <Article title="Et aute ad consectetur culpa aute." text="Consequat quis aute ex culpa aliquip minim amet proident et. Ex laborum labore consequat ea duis aliqua labore dolor tempor laboris nostrud deserunt anim. Fugiat do pariatur qui voluptate est. Et velit aliqua irure excepteur. Irure labore sunt duis quis occaecat dolore dolore cupidatat officia dolore Lorem veniam. Qui anim commodo ea excepteur commodo elit minim sint culpa culpa anim nostrud magna.
          Eiusmod fugiat ea elit cupidatat enim velit mollit do excepteur non sunt sint veniam sit. Elit fugiat elit id id sit aliquip est ea deserunt exercitation tempor. Irure cillum ea adipisicing cupidatat exercitation tempor culpa commodo esse nisi exercitation. Nulla cupidatat non et occaecat occaecat qui ipsum cillum esse.
          Occaecat reprehenderit officia amet Lorem. Tempor amet fugiat aliqua reprehenderit consectetur reprehenderit consequat deserunt. Quis dolor et ea eu ad enim aliqua proident velit commodo anim. Magna mollit enim anim adipisicing elit ullamco reprehenderit occaecat adipisicing Lorem cillum. Nostrud ea amet aliqua nisi."/>
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
