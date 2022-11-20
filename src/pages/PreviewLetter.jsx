import React from 'react';
import { LetterForm } from '../components/PreviewLetter/letterform';
import classes from '../styles/style.module.css';
import { Navbar } from '../components/DevNafNavbar/Navbar';

const PreviewLetter = () => {
  return (
    <>
      <Navbar />
      <div className={classes.survey_landing_page}>
        <LetterForm />
      </div>
    </>
  );
};

export default PreviewLetter;
