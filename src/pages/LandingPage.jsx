import React from 'react';
import { Form } from '../components/Form/Form';
import classes from '../styles/style.module.css';
import { Navbar } from '../components/DevNafNavbar/Navbar';
import Footer from '../components/Footer';
export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className={classes.survey_landing_page}>
        <Form />
      </div>
      <Footer />
    </>
  );
};
