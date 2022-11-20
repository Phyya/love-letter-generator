import React from 'react';
import PriceComponent from './PriceComponent';

import styles from './css/Prices.module.css';
import FooterTwo from './FooterTwo';

const Prices = () => {
  const prices = [
    {
      id: 1,
      heading: 'Sweet Love',
      price: '$10',
      duration: '/mo',
      desc: [
        'Love notes curated for your loved one, and scheduled to be sent out in the morning',
        'You get to customize 10 love notes of your choice',
      ],
    },
    {
      id: 2,
      heading: 'Advanced',
      price: '$25',
      duration: '/3mo',
      desc: [
        'Love notes curated for your loved one, and scheduled to be sent out in the morning and night',
        'Love note to be delivered to your lover at night. (2 times a week).',
        'You get to customize 20 love notes of your choice.',
      ],
    },
    {
      id: 3,
      heading: 'Pro Gratifying',
      price: '$99',
      duration: '/annually',
      desc: [
        'Love notes curated for your loved one, and scheduled to be sent out in the morning and night',
        'Unlimited access to customize love notes.',
        'Special love notes for your loved ones birthday.',
      ],
    },
  ];
  return (
    <>
      <main className={styles.Prices}>
        <div className={styles.TitleContainer}>
          <h1>Pricing</h1>
          <p className={styles.Subscription}>
            Our subscription plans are scheduled monthly
          </p>
        </div>
        <section className={styles.Container}>
          {prices.map(({ heading, price, duration, desc, id }) => (
            <PriceComponent
              key={id}
              heading={heading}
              price={price}
              duration={duration}
              desc={desc}
            />
          ))}
        </section>
      </main>
      <FooterTwo />
    </>
  );
};

export default Prices;
