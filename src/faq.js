import { useState } from 'react';
import React from 'react';
//import {BsCaretDown} from 'react-icons/bs'

import './faq.css';
export function Faq(props) {
  const obj = props;

  const { id, title, info } = obj;
  console.log('yes');
  const [showInfo, setShowInfo] = useState(false);
  function showInfoBtn() {
    setShowInfo(!showInfo);
  }

  return (
    <section key={id} className="faq">
      <div className="title-button-container">
        <h2>{title}</h2>
        <button onClick={showInfoBtn}>{showInfo ? '-' : '+'}</button>
      </div>
      {showInfo && <p>{info}</p>}
    </section>
  );
}
