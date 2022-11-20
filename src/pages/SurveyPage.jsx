import React from 'react';
import { Form } from '../components/Form/Form';
import classes from '../styles/style.module.css';
import { Navbar } from '../components/DevNafNavbar/Navbar';
const SurveyPage = () => {
  return (
    <>
      <Navbar />
      <div className={classes.survey_landing_page}>
        <Form />
      </div>
    </>
  );
};

export default SurveyPage;
