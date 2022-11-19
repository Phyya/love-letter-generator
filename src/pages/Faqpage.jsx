import React from 'react';
//import ReactDom from "react-dom";
import { questions } from '../data.js';
import { Faq } from '../faq';
import '../index.css';

function Faqpage() {
  return (
    <div className="App">
      <section className="container">
        <div className="heading-div">
          <h1 className="ask">Frequently Asked Questions</h1>
        </div>

        <div className="faq-div">
          {questions.map((item) => {
            const { id, title, info } = item;
            return <Faq key={id} title={title} info={info} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default Faqpage;
