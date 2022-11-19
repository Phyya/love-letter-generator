import React from 'react';
import { logoPNG } from '../assets';

function Logo() {
  return (
    <div className="flex items-center mt-9 px-8 w-[29rem]">
      <img src={logoPNG} alt="logo" className="w-6 h-6 object-contain mr-2" />
      <h2 className="text-lg">LoveMe</h2>
    </div>
  );
}

export default Logo;
