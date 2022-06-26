import React from 'react'
import { useState } from "react";

import "./PasswordStrength.css";

const PasswordStrength = () => {
  let [password, setPassword] = useState("");
  let [red, setRed] = useState("");
  let [yellow, setYellow] = useState("");
  let [lightGreen, setLightGreen] = useState("");
  let [darkGreen, setDarkGreen] = useState("");

  return (
    <main>
      <div className='password-strength'>
        <div className='password-strength__password-container'>
          <input 
          className='password-strength__password-input' 
          type="text" 
          placeholder='Enter a Password' 
          onChange={(event) => {
            setPassword(event.target.value);
            console.log(password.length)
            if (event.target.value.length == 0) {
              setRed("");
              setYellow("");
              setLightGreen("");
              setDarkGreen("");
            }
            else if (password.length >= 0 && password.length <= 5) {
              setRed("rgba(255,0,0,1)");
              setYellow("");
            }
            else if (password.length > 5 && password.length <= 10) {
              setYellow("rgb(255, 238, 0, 1)");
              setLightGreen("");
            }
            else if (password.length > 10 && password.length <= 20) {
              setLightGreen("rgb(141, 255, 2, 1)");
              setDarkGreen("");
            }
            else if (password.length > 20 && password.length <= 30) {
              setDarkGreen("rgb(50, 131, 25, 1)");
            }
          }} />
      </div>
        <div className='password-strength__four-bars-container'>
          <div className='password-strength__bar password-strength__bar--red-color' style={{backgroundColor: red}}></div>
          <div className='password-strength__bar password-strength__bar--yellow-color' style={{backgroundColor: yellow}}></div>
          <div className='password-strength__bar password-strength__bar--light-green-color' style={{backgroundColor: lightGreen}}></div>
          <div className='password-strength__bar password-strength__bar--dark-green-color' style={{backgroundColor: darkGreen}}></div>
        </div>
      </div>
    </main>
  );
}

export default PasswordStrength

/*
Whenever the password input changes, a variable must update itself to the password input change. 

*/
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