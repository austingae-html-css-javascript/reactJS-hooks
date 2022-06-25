import React from 'react'
import { useState } from "react";

import "./Password.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Password = () => {
  const [eyeIcon, setEyeIcon] = useState(faEye);
  const [showOrHidePassword, setShowOrHidePassword] = useState("password");

  return (
    <main>
      <div className='log-in'>
        <div className='log-in__input-container'>
          <input className='log-in__input' type="text" placeholder='Username' />
        </div>
        <div className='log-in__input-container'>
          <input className='log-in__input' type={showOrHidePassword} placeholder='Password' />
          <button className='log-in__icon-button' 
          onClick={() => {
            if (eyeIcon == faEye) {
              setEyeIcon(faEyeSlash);
              setShowOrHidePassword("text");
            }
            else if (eyeIcon == faEyeSlash) {
              setEyeIcon(faEye);
              setShowOrHidePassword("password");
            }
          }}
          ><FontAwesomeIcon className='log-in__icon' icon={eyeIcon} /></button>
        </div>
        <div>
          <button className='log-in__button'>Log In</button>
        </div>
      </div>
    </main>
  );
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
  5) Javascript - Yes. 
*/

