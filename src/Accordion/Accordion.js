import React from 'react'

import "./Accordion.css";

import AccordionItem from './AccordionItem';
const Accordion = () => {

  return (
    <main>
      <div className='accordion'>
        <AccordionItem question="What is your return policy?" answer="Adipisicing commodo amet pariatur laboris esse nisi ex excepteur. Sit voluptate sunt dolor minim consequat nulla fugiat elit. Cillum reprehenderit duis id eiusmod ea qui sint sunt pariatur nisi aliqua culpa mollit. Ad ipsum aute amet et eiusmod culpa ex sit consequat sunt. Proident mollit velit aliquip consequat nulla qui." />
        <AccordionItem question="How long does it take for your package to arrive?" answer="Culpa ut minim consectetur nostrud. Proident ea laborum labore amet laboris anim aliquip cillum incididunt laboris eu minim. Consequat dolor exercitation eiusmod ex laboris laboris id. Quis veniam esse dolor sit fugiat voluptate Lorem sunt exercitation Lorem. Cupidatat occaecat magna reprehenderit nisi do ea cupidatat magna minim occaecat nisi nulla esse." />
        <AccordionItem question="What does this company do?" answer="Culpa ut minim consectetur nostrud. Proident ea laborum labore amet laboris anim aliquip cillum incididunt laboris eu minim. Consequat dolor exercitation eiusmod ex laboris laboris id. Quis veniam esse dolor sit fugiat voluptate Lorem sunt exercitation Lorem. Cupidatat occaecat magna reprehenderit nisi do ea cupidatat magna minim occaecat nisi nulla esse." />
        <AccordionItem question="How am I today?" answer="Culpa ut minim consectetur nostrud. Proident ea laborum labore amet laboris anim aliquip cillum incididunt laboris eu minim. Consequat dolor exercitation eiusmod ex laboris laboris id. Quis veniam esse dolor sit fugiat voluptate Lorem sunt exercitation Lorem. Cupidatat occaecat magna reprehenderit nisi do ea cupidatat magna minim occaecat nisi nulla esse." />
      </div>
    </main>
  )
}

export default Accordion

/*
setUseStateArray(useStateArray.concat("item")) to add "item" to the useStateArray 
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
  4) Decorate the HTML elements -
  If * {box-sizing: content-box}
  - Parent Div's Width = Child Div's Width+Padding+Border+Margin
  - Parent Div's Width = Block Element's Width+Padding+Border+Margin
  - However, Parent Div's Width != Inline Element's Width+Padding+Border+Margin
  5) Javascript - 
*/