import React from 'react';
import Logo from '../Logo';

const Header = () => {
  return (
    <div className="md:flex flex-col p-4 md:p-8">
      <div className="flex justify-between ">
        <Logo />
        <button className="hidden md:flex self-end justify-end content-end bg-[#E23636] px-4 py-2 rounded-lg">
          SUBSCRIBE TO UPDATES
        </button>
        <button className="bg-[#E23636] px-5 py-2 md:hidden mt-32 rounded-lg">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default Header;
