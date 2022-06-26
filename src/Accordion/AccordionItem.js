import React, { useTransition } from 'react'

import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'; 

import "./AccordionItem.css";

const AccordionItem = (props) => {
  let [showAnswer, setShowAnswer] = useState(false);
  let [rotateIcon, setRotateIcon] = useState("");

  return (
    <div className='accordion__item'>
    <div className='accordion__item-question-container' onClick={() => {
      if (showAnswer == false) {
        setRotateIcon("rotate(90deg)");
        setShowAnswer(true);
      }
      else if (showAnswer == true) {
        setRotateIcon("rotate(0deg)");
        setShowAnswer(false);
      }
    }}>
      <p className='accordion__item-question'>{props.question}</p>
      <FontAwesomeIcon className='accordion__item-icon' icon={faArrowRightLong} style={{transform: rotateIcon}}/>
    </div>
    {showAnswer && <p>{props.answer}</p>}
  </div>
  )
}

export default AccordionItem