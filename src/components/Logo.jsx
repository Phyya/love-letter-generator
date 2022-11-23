import React from 'react';
import { Link } from 'react-router-dom';

import { logo } from '../assets';

export default function Logo() {
  return (
    <Link to='/' className="flex gap-[12px] items-end">
      <img src={logo} alt="logo" />
      <span className="font-[900] text-[30px] text-black">LoveMe</span>
    </Link>
  );
}
