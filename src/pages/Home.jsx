import React from 'react';
import { Form } from '../components/Form/Form';
import classes from '../styles/style.module.css';
import { Navbar } from '../components/DevNafNavbar/Navbar';
const Home = () => {
  return (
    <>
      <Navbar />
      <div className={classes.survey_landing_page}>
        <Form />
      </div>
    </>
  );
};

export default Home;
