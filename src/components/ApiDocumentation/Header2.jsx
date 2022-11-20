import React from 'react';
import { Link } from 'react-router-dom';

const Header2 = () => {
  return (
    <div className="md:flex flex-col p-4 md:p-8">
      <div className="flex mt-24 md:mt-40 mb-16">
        <h1 className="text-[#E23636] text-bold text-4xl md:text-7xl mr-3 md:mr-3 mt-4">
          STATUS
        </h1>
        <hr
          className="md:hidden bg-gray-200 border-solid border-2 h-[100px] mr-3"
          style={{ marginTop: '-15px' }}
        />
        <hr
          className="hidden md:flex bg-gray-200 border-solid border-2 h-[170px] mr-5"
          style={{ marginTop: '-40px' }}
        />
        <p className="md:mr-36 md:mt-7 lg:flex lg:mt-10">
          Welcome to the LoveMe status page. Here you will find real-time
          information about status of our services.
        </p>
      </div>
      <div className="flex justify-between w-full px-2 py-3 md:py-4 bg-black text-white">
        <p className="text-sm">All Systems Operational</p>
        <p className="text-xs">Refreshed &gt; 1 minute ago</p>
      </div>
      <p className="flex text-sm my-10 justify-center md:justify-end">
        Uptime over the past 90 days.{' '}
        <Link className="text-[#136DF4]" to="/uptime">
          View historical uptime.
        </Link>{' '}
      </p>
    </div>
  );
};

export default Header2;
