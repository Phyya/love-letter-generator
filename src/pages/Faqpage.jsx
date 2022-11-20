import React from 'react';
//import ReactDom from "react-dom";
import { questions } from '../data.js';
import Navbar from '../components/Navbar/Navbar.jsx';
import FooterTwo from '../components/FooterTwo.jsx';
import { Faq } from '../faq';
import '../index.css';

function Faqpage() {
  return (
    <div className="App">
      <Navbar />
      <div className="mt-40"></div>
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
      <FooterTwo />
    </div>
  );
}

export default Faqpage;
