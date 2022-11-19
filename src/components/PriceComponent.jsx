import React from 'react';

import styles from './css/PriceComponent.module.css';

const PriceComponent = (props) => {
  const obj = props;
  const { heading, price, duration, desc } = obj;
  return (
    <div className={styles.Container}>
      <h2 className={styles.heading}>{heading}</h2>
      <p>
        <b>{price}</b>
        <span>{duration}</span>
      </p>
      <ul>
        {desc.map((list, i) => (
          <li key={`key-${i}`}>{list}</li>
        ))}
      </ul>
      <button type="button">Subscribe</button>
    </div>
  );
};

export default PriceComponent;
