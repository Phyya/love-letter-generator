import { useState } from 'react';
import React from 'react';
//import {BsCaretDown} from 'react-icons/bs'
import arrowdown from './assets/arrowdown.svg'
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
      <div className="title-button-container text-[16px] flex justify-between w-full">
        <h2>{title}</h2>
        <img className={`${showInfo ? 'rotate-180':''}`} src={arrowdown} onClick={showInfoBtn}/>
      </div>
      {showInfo && <p className='text-[18px] px-[10px] py-[15px]'>{info}</p>}
    </section>
  );
}
