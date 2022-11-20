import React from 'react';
import '../styles/notfound.css';
import notfound from '../assets/notfound.png';

function Notfound() {
  return (
    <div className="notfound">
      <div className="image-container">
        <img src={notfound} alt="notfound" />
      </div>

      <h3>Aww! no results found</h3>
      <p>Sorry, there are no results for scheduled letters in this folder.</p>
      <button className="notfoundbtn">Schedule Now</button>
    </div>
  );
}

export default Notfound;
