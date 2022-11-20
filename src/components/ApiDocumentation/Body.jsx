import React from 'react';
import bars from './assets/bars.png';
import arrow from './assets/arrow.png';

const Body = () => {
  return (
    <div className="md:flex flex-col p-4 md:p-8">
      <div className="flex flex-col">
        <button className="px-3 md:px-5 py-2 border border-slate-300 flex justify-between">
          <p className="font-bold">Generator</p>
          <p className="font-bold text-[#0DC256]">Operational</p>
        </button>
        <button className="px-3 md:px-5 py-2 border border-slate-300 flex  flex-col">
          <div className="flex justify-between w-full mb-2">
            <p className="font-bold">API</p>
            <p className="font-bold text-[#0DC256]">Operational</p>
          </div>
          <img src={bars} alt="" />
          <div className="flex w-full mt-2 justify-between">
            <p className="text-sm text-[#d9d9d9]">90 days ago</p>
            <hr className="w-[20%] mt-2" />
            <p className="text-sm text-[#d9d9d9]">98.87 % uptime</p>
            <hr className="w-[20%] mt-2 " />
            <p className="text-sm text-[#d9d9d9] ">Today</p>
          </div>
        </button>
        <button className="px-3 md:px-5 py-2 border border-slate-300 flex justify-between">
          <p className="font-bold">Support</p>
          <p className="font-bold text-[#0DC256]">Operational</p>
        </button>
        <button className="px-3 md:px-5 py-2 border border-slate-300 flex justify-between">
          <p className="font-bold">Application</p>
          <p className="font-bold text-[#0DC256]">Operational</p>
        </button>
        <button className="px-3 md:px-5 py-2 border border-slate-300 flex justify-between">
          <p className="font-bold">Database</p>
          <p className="font-bold text-[#0DC256]">Operational</p>
        </button>
      </div>
      <div className="flex flex-col mt-16">
        <h1 className="font-bold ">Past Incidents</h1>
        <h1 className="font-bold mt-3 mb-2">Nov 18, 2022</h1>
        <hr className="border mb-1" />
        <p className="text-[#d9d9d9] mb-3">No Incidents reported today </p>
        <h1 className="font-bold mt-3 mb-2">Nov 17, 2022</h1>
        <hr className="border mb-4" />
        <h1 className="font-bold mb-4 text-[#ffb13d]">Database Issues</h1>
        <p className="text-sm mb-1">
          <span className="font-bold">Resolved -</span> This incident has been
          resolved
        </p>
        <p className="text-sm text-[#d9d9d9] mb-3">Nov 17, 15:37 UTC</p>
        <p className="text-sm mb-1">
          <span className="font-bold">Monitoring -</span> A fix has been
          implemented and we are monitoring the results
        </p>
        <p className="text-sm text-[#d9d9d9] mb-3">Nov 17, 15:37 UTC</p>
        <p className="text-sm mb-1">
          <span className="font-bold">Update -</span> We are experiencing some
          issues with our database, causing slowness on the site. We appreciate
          your patience as our engineers investigate .{' '}
        </p>
        <p className="text-sm text-[#d9d9d9] mb-3">Nov 17, 15:37 UTC</p>
        <p className="text-sm mb-1">
          <span className="font-bold">Identified -</span> The issue has been
          identified and a fix is being implemented
        </p>
        <p className="text-sm text-[#d9d9d9] mb-3">Nov 17, 15:37 UTC</p>
        <p className="text-sm mb-1">
          <span className="font-bold">Investigating -</span> We are experiencing
          some issues with our database, causing slowness on the site. We
          appreciate your patience as our engineers investigate{' '}
        </p>
        <p className="text-sm text-[#d9d9d9] mb-4">Nov 17, 15:37 UTC</p>
        <p className="text-sm mb-1 font-bold">Nov 16, 2022</p>
        <hr className="border mb-1" />
        <p className="text-[#d9d9d9] mb-4">No Incidents reported </p>
        <p className="text-sm mb-1 font-bold">Nov 15, 2022</p>
        <hr className="border mb-1" />
        <p className="text-[#d9d9d9] mb-16">No Incidents reported </p>
        <hr className="border mb-2" />
        <div className="flex">
          <img src={arrow} alt="" className="h-3 mr-3 mt-1" />
          <p className="text-sm text-[#136df4]">Incident History</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
