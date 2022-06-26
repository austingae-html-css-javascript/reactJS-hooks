import React from 'react'
import { useState } from "react";

import "./Password.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Password = () => {
  let [eyeIcon, setEyeIcon] = useState(faEyeSlash);
  let [showOrHidePassword, setShowOrHidePassword] = useState("password")
  return (
    <main>
      <div className='log-in'>
        <input className='log-in__input log-in__username' type="text" placeholder='Type your User' />
        <div className='log-in__password-container'>
          <input className='log-in__input' type={showOrHidePassword} placeholder='Type your Password' />
          <button 
          className='log-in__eye-icon-button' 
          onClick={() => {
            if (eyeIcon == faEyeSlash) {
              setEyeIcon(faEye);
              setShowOrHidePassword("text");
            }
            else if (eyeIcon == faEye) {
              setEyeIcon(faEyeSlash);
              setShowOrHidePassword("password")
            }
          }}><FontAwesomeIcon className='log-in__eye-icon' icon={eyeIcon} />
          </button>
        </div>
        <button className='log-in__button'>Log In</button>
      </div>
    </main>
  );
}

export default Password

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

