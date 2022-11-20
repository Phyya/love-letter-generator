import React from 'react';
import { PatnershipWrapper, HeroSection, WhyJoinSection } from './style';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
// import Navbar from '../../components/Navbar/Navbar';
import FooterTwo from '../../components/FooterTwo';

const Patnership = () => {
  const navigate = useNavigate();
  return (
    <>
      <PatnershipWrapper>
        {/* <Navbar /> */}
        <div className="mt-44"></div>
        <HeroSection>
          <div className="container">
            <h1 className="hero__header">Strategic Patnership</h1>
            <p className="hero__description">
              Earn money with LoveMe, your colleagues will be thrilled when you
              invite them to our AI love generator platform You’ll get paid 35%
              reccurring commission for life
            </p>
            <div className="button__container">
              <Button
                height="40px"
                width="120px"
                name="Get Started"
                onClick={() => {
                  navigate('/signup');
                }}
              />
            </div>
          </div>
        </HeroSection>
        <WhyJoinSection>
          <h1 className="why__join__header">
            Why you should Join as a Partner?
          </h1>
          <ul className="why__join grid">
            <article className="why__join__card">
              <h3 className="article__header">
                Generate easily recurring revenue
              </h3>
              <p className="article__description">
                Get paid for every new paying customers you acquire for life.
              </p>
            </article>
            <article className="why__join__card">
              <h3 className="article__header">
                Enjoy simple, intuitive dashboard
              </h3>
              <p className="article__description">
                Launch canpaigns and monitor results.
              </p>
            </article>
            <article className="why__join__card">
              <h3 className="article__header">
                Benefit from our AI love generator platfrom
              </h3>
              <p className="article__description">
                You will be the first to know when we introduce great new
                features.
              </p>
            </article>
          </ul>
          <div className="divider">
            <span></span>
          </div>
          <ul className="how__to__join grid" style={{ marginTop: '30px' }}>
            <article className="how__to__join__card">
              <h3 className="article__header">1. Apply First</h3>
              <p className="article__description">
                Quality and the right partners are important to us. Thats’s why
                we review your application.
              </p>
            </article>
            <article className="how__to__join__card">
              <h3 className="article__header">2. Promote Us</h3>
              <p className="article__description">
                Start your campaign with your affiliate link and recommend us to
                others
              </p>
            </article>
            <article className="how__to__join__card">
              <h3 className="article__header">3. Get Paid</h3>
              <p className="article__description">
                You recieve a recurring commission of 35% each time
                subsbcription renews
              </p>
            </article>
          </ul>
        </WhyJoinSection>
      </PatnershipWrapper>
      <FooterTwo />
    </>
  );
};

export default Patnership;
