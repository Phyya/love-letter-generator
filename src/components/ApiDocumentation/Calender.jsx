import React from 'react';
import darrow from './assets/darrow.png';
import larrow from './assets/larrow.png';
import rarrow from './assets/rarrow.png';
import sept from './assets/sept1.png';
import oct from './assets/oct1.png';
import nov from './assets/nov1.png';
import arrow from './assets/arrow.png';
import { Link } from 'react-router-dom';

const Calender = () => {
  return (
    <div className="md:flex flex-col p-4 md:p-8">
      <div className="w-full flex mb-8">
        <p className="px-2">
          {' '}
          <Link to="/incidents">Incidents</Link>
        </p>
        <p className="px-2">
          {' '}
          <Link to="/uptime">Uptime</Link>
        </p>
      </div>
      <div className="md:flex md:justify-between mb-5">
        <button className="w-full md:w-[30%] text-left flex justify-between px-3 py-2 bg-gray-200 mb-8">
          <p>API</p>
          <img src={darrow} alt="" className="w-4 mt-2" />
        </button>
        <div className="flex justify-center">
          <img src={larrow} alt="" className="h-4 mt-1" />
          <p className="px-5">September 2022 - November 2022</p>
          <img src={rarrow} alt="" className="h-4 mt-1" />
        </div>
      </div>
      <div className="flex flex-col justify-center md:hidden">
        <img src={sept} alt="" className="my-6 w-80 self-center" />
        <img src={oct} alt="" className="my-6 w-80 self-center" />
        <img src={nov} alt="" className="my-6 w-80 self-center" />
      </div>
      <div className="hidden md:flex justify-between">
        <img src={sept} alt="" className="my-6 w-80 self-center" />
        <img src={oct} alt="" className="my-6 w-80 self-center" />
        <img src={nov} alt="" className="my-6 w-80 self-center" />
      </div>
      <hr className="border mb-2 mt-8" />
      <div className="flex ">
        <img src={arrow} alt="" className="h-3 mr-3 mt-1" />
        <p className="text-sm text-[#136df4]">Incident History</p>
      </div>
    </div>
  );
};

export default Calender;
