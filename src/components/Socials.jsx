import React from 'react';
import { instaPNG, twitterPNG, facebookPNG } from '../assets';

function Socials() {
  return (
    <div className="flex justify-between w-[6rem] ml-[2rem]">
      <img src={instaPNG} alt="insta" />
      <img src={twitterPNG} alt="twitter" />
      <img src={facebookPNG} alt="" />
    </div>
  );
}

export default Socials;
