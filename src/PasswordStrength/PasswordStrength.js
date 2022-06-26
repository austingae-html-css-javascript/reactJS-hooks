import React from 'react';
import { useState } from "react";

import "./PasswordStrength.css";

const PasswordStrength = () => {
  let [redColor, setRedColor] = useState("rgba(255,0,0,0.2)");
  let [yellowColor, setYellowColor] = useState("rgba(255,255,0,0.2)");
  let [greenColor, setGreenColor] = useState("rgba(0,255,0,0.2)");

  let [passwordStrengthWord, setPasswordStrengthWord] = useState("");
  let [color, setColor] = useState("rgb(0,0,0,1)");

  return (
    <main>
      <div className='password'>
        <div className='password__password-container'>
          <input 
          className='password__password-input'
          type="text" 
          placeholder='Enter a New Password' 
          onChange={(event) => {
            if (event.target.value.length == 0) {
              setRedColor("rgba(255,0,0,0.2)");
              setYellowColor("rgba(255,255,0,0.2)");
              setGreenColor("rgba(0,255,0,0.2)");
              setPasswordStrengthWord("");
              setColor("rgba(0,0,0,1)")
            }
            else if (event.target.value.length <= 8) {
              setRedColor("rgba(255,0,0,1)");
              setYellowColor("rgba(255,255,0,0.2)");
              setPasswordStrengthWord("Weak");
              setColor("rgba(255,0,0,1)");
            }
            else if (event.target.value.length > 8 && event.target.value.length < 16) {
              setYellowColor("rgba(255,255,0,1)");
              setGreenColor("rgba(0,255,0,0.2");
              setPasswordStrengthWord("Okay");
              setColor("rgba(255,255,0,1)");
            }
            else if (event.target.value.length >= 16) {
              setGreenColor("rgba(0,255,0,1)");
              setPasswordStrengthWord("Strong");
              setColor("rgba(0,255,0,1)");
            }
          }}
          />
        </div>
        <div className='password__password-strength-container'>
          <div className='password__password-strength-bar' style={{backgroundColor: redColor}}></div>
          <div className='password__password-strength-bar' style={{backgroundColor: yellowColor}}></div>
          <div className='password__password-strength-bar' style={{backgroundColor: greenColor}}></div>
        </div>

        <p style={{color: color}}><span>Password Strength: </span><span>{passwordStrengthWord}</span></p>

        {(passwordStrengthWord == "Strong" && (<button>Change Password</button>))}

      </div>
    </main>
  );
}

export default PasswordStrength

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