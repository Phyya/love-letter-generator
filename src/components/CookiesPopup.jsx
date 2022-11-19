import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Cookie.module.css';

const CookiesPopup = () => {
  const [popup, setPopup] = useState(true);
  const togglePopup = () => {
    setPopup(!popup);
  };
  return (
    <>
      {popup && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
          className={styles.cookie__modal}
        >
          <span onClick={togglePopup}>
            <FontAwesomeIcon icon={faClose} />
          </span>
          <div className={styles.cookie__modal__text}>
            <h5>Cookie Policies</h5>
            {/* Please Link ReadMore To The CookiesPolicy Component */}
            <p>
              We use cookies to enhance your browsing experience, serve
              personalized ads or content, and analyze our traffic. By clicking
              “Accept Cookies”, you consent to our use of cookies.{' '}
              <Link to="/cookie_policy">Read More</Link>
            </p>
          </div>
          {/* Please Kindly Edit This Back To The Re-usable Buttons */}
          <div className={styles.cookie__modal__buttons}>
            <button onClick={togglePopup}>Reject All</button>
            <button onClick={togglePopup}>Accept Cookies</button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default CookiesPopup;
