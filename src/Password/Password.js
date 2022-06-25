import React from 'react'
import { useState } from "react";

import "./Password.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';





const Password = () => {
  let [icon, setIcon] = useState(faEye);
  let [showTextOrPassword, setShowTextOrPassword] = useState("password")
  return (
    <main>
      <div className='login'>
        <input className='login__box' type='text' placeholder='User' />
        <div className='login__password-container'>
          <input className='login__box' type={showTextOrPassword} placeholder='Password' />
          <button className='login__eye-button' onClick={() => {
            if (icon == faEye) {
              setShowTextOrPassword("text");
              setIcon(faEyeSlash);
            }
            else if (icon == faEyeSlash) {
              setShowTextOrPassword("password");
              setIcon(faEye);
            }
          }}><FontAwesomeIcon className='login__eye' icon={icon} size="1x" />
          </button>
        </div>
        <button className='login__button'>Log In</button>
      </div>
    </main>
  )
}

export default Password

/*
When you click on the faEye, the faEye turns to faEyeSlash. And when you click the faEyeSlash, then show faEye. 
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
  5) Javascript - 
*/

