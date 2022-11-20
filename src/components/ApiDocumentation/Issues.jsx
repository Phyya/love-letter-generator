import React from 'react';
import larrow from './assets/larrow.png';
import rarrow from './assets/rarrow.png';
import add from './assets/add.png';
import arrow from './assets/arrow.png';
import { Link } from 'react-router-dom';
const Issues = () => {
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
      <div className="flex justify-center md:justify-end md:content-end md:self-end mb-10">
        <img src={larrow} alt="" className="h-4 mt-1" />
        <p className="px-5">September 2022 - November 2022</p>
        <img src={rarrow} alt="" className="h-4 mt-1" />
      </div>
      <div className="flex flex-col mb-6">
        <h1 className="font-bold mt-3 mb-2">November 2022</h1>
        <hr className="border mb-4" />
        <h1 className="font-bold mb-2 text-[#ffb13d]">Database Issues</h1>
        <p className="text-sm mb-1">This incident has been resolved</p>
        <p className="text-sm text-[#d9d9d9] mb-2">Nov 17, 15:37 UTC</p>
        <h1 className="font-bold mb-2 text-[#ff8227]">Backend Stability 2</h1>
        <p className="text-sm mb-1">This incident has been resolved</p>
        <p className="text-sm text-[#d9d9d9] mb-3">Nov 17, 15:37 UTC</p>
        <h1 className="font-bold mb-2 text-[#ff8227]">Backend Stability 1</h1>
        <p className="text-sm mb-1">This incident has been resolved</p>
        <p className="text-sm text-[#d9d9d9] mb-3">Nov 17, 15:37 UTC</p>
        <button className="flex border border-gray-300 px-auto py-1 justify-center">
          <img src={add} alt="" className="px-2 w-7 mt-1" />
          <p className="px-2 text-sm text-gray-300">Show All Incidents</p>
        </button>
      </div>

      <div className="flex flex-col mb-6">
        <h1 className="font-bold mt-3 mb-2">October 2022</h1>
        <hr className="border mb-4" />
        <h1 className="font-bold mb-2 text-[#ffb13d]">Database Issues</h1>
        <p className="text-sm mb-1">This incident has been resolved</p>
        <p className="text-sm text-[#d9d9d9] mb-2">Nov 17, 15:37 UTC</p>
        <h1 className="font-bold mb-2 text-[#ff8227]">Backend Stability 2</h1>
        <p className="text-sm mb-1">This incident has been resolved</p>
        <p className="text-sm text-[#d9d9d9] mb-3">Nov 17, 15:37 UTC</p>
        <h1 className="font-bold mb-2 text-[#ff8227]">Backend Stability 1</h1>
        <p className="text-sm mb-1">This incident has been resolved</p>
        <p className="text-sm text-[#d9d9d9] mb-3">Nov 17, 15:37 UTC</p>
        <button className="flex border border-gray-300 px-auto py-1 justify-center">
          <img src={add} alt="" className="px-2 w-7 mt-1" />
          <p className="px-2 text-sm text-gray-300">Show All Incidents</p>
        </button>
      </div>

      <div className="flex flex-col mb-12">
        <h1 className="font-bold mt-3 mb-2">September 2022</h1>
        <hr className="border mb-4" />
        <h1 className="font-bold mb-2 text-[#ffb13d]">Database Issues</h1>
        <p className="text-sm mb-1">This incident has been resolved</p>
        <p className="text-sm text-[#d9d9d9] mb-2">Nov 17, 15:37 UTC</p>
        <h1 className="font-bold mb-2 text-[#ff8227]">Backend Stability 2</h1>
        <p className="text-sm mb-1">This incident has been resolved</p>
        <p className="text-sm text-[#d9d9d9] mb-3">Nov 17, 15:37 UTC</p>
        <h1 className="font-bold mb-2 text-[#ff8227]">Backend Stability 1</h1>
        <p className="text-sm mb-1">This incident has been resolved</p>
        <p className="text-sm text-[#d9d9d9] mb-3">Nov 17, 15:37 UTC</p>
        <button className="flex border border-gray-300 px-auto py-1 justify-center">
          <img src={add} alt="" className="px-2 w-7 mt-1" />
          <p className="px-2 text-sm text-gray-300">Show All Incidents</p>
        </button>
      </div>
      <hr className="border mb-2 mt-8" />
      <div className="flex ">
        <img src={arrow} alt="" className="h-3 mr-3 mt-1" />
        <p className="text-sm text-[#136df4]">Current Status</p>
      </div>
    </div>
  );
};

export default Issues;
