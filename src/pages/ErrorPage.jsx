import React from 'react';
import { errorPNG } from '../assets';

function ErrorPage() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <img src={errorPNG} alt="" />
      <h1 className="mt-10 text-2xl font-avenir_bold">Page Not Found</h1>
      <a
        href="/"
        className="mt-8 text-white bg-main-2 w-[20rem] h-14 flex items-center justify-center rounded-md"
      >
        Return to Home
      </a>
    </div>
  );
}

export default ErrorPage;
