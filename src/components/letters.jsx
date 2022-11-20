import PropTypes from 'prop-types';
import React from 'react';
import '../styles/letters.css';

function Letter({ text }) {
  return (
    <div className="letter-container">
      <div className="top">
        <h3>Sweet Love</h3>
        <p>11/6/22</p>
      </div>

      <p className="mssg">{text}</p>

      <p className="view">
        <a href="#">View</a>
      </p>
    </div>
  );
}

Letter.propTypes = {
  text: PropTypes.string,
};

export default Letter;
