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
      <section className="mb-[56px] w-full">
        <div className="heading-div text-center ">
          <h1 className="ask sm:text-[50px] text-[36px]">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="faq-div flex flex-col gap-[36px] mx-[50px]">
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
