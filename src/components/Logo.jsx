import React from 'react';
<<<<<<< HEAD

import { logo } from '../assets';

export default function Logo() {
  return (
  <header className='flex gap-[12px] items-center'>
    <img src={logo} alt="logo" />
    <span className='font-[900] text-[27px]'>LoveMe</span>
  </header>
  )
}
=======
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
>>>>>>> a3576b020a0a52d284deaa0ef7b19b149181738e
