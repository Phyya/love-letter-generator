import React from 'react';
import { logoPNG } from '../assets';

//${variant === 'primary' ? 'bg-main-1' : 'bg-sec-1'}

function Footer() {
  return (
    <div
      className={`
        h-[29rem] text-white flex flex-col bg-sec-1`}
    >
      <div className="flex items-center mt-9 px-8 w-[29rem]">
        <img src={logoPNG} alt="logo" className="w-6 h-6 object-contain mr-2" />
        <h2 className="text-lg">LoveMe</h2>
      </div>
      <div className="py-11 px-14 flex justify-between">
        <div className="flex flex-col gap-2">
          <a href="/blog">Blog</a>
          <a href="/generator">Letter Generator</a>
          <a href="/career">Career</a>
        </div>
        <div className="flex flex-col gap-2">
          <a href="/pricing">Pricing</a>
          <a href="/about">About LoveMe</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
