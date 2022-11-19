import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col font-avenir">
        Hello Team Engine
        <Link to="/pricing">Pricing</Link>
      </div>
    </>
  );
};

export default Home;
