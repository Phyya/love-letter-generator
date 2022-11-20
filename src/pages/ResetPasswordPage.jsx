import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const ResetPasswordPage = () => {
  return (
    <section className=" px-[4vw] text-[#383838] mt-40 md:grid grid-cols-2 place-items-center">
      <Navbar />
      <article className="  md:px-8  md:pt-[4rem]">
        {/* logo */}
        <div className=" flex justify-center items-center gap-x-1 pb-12 pt-4 md:justify-start">
          <img
            src="/images/logos_vivaldi-icon.svg"
            alt="logo_vivaldi"
            className=" w-[1rem]"
          />
          <h3 className=" font-[600] text-[#464646] ">LoveMe</h3>
        </div>
        {/* content */}
        <div className=" mb-4">
          <h2 className=" mb-2 text-[1.5rem] font-[500] text-[#04172A] ">
            Hey there, don’t worry!
          </h2>
          <p className=" text-[0.87rem]  leading-7">
            We are here to help you recover your password. Enter the E-mail
            address you used when you joined us and we’ll send you instructions
            on how to change your password.
          </p>
        </div>
        <form action="">
          {/* username */}
          <div className=" mb-8">
            <label htmlFor="email" className=" block text-[0.87rem] mb-2">
              Email
            </label>
            <input
              type="text"
              placeholder="Username"
              required
              className=" border border-solid border-[#D0D5DD] bg-[#F9FAFB] rounded-[8px]  pl-4 py-3 "
            />
          </div>
          {/* send reset button */}
          <button className=" bg-main-1 text-white w-[100%] h-[2.75rem] rounded-lg block border border-solid border-main-1 ml-[auto] mr-[auto] mb-4">
            Send reset link
          </button>
        </form>
        {/* back to login */}
        <button className=" block  w-[100%] h-[2.75rem] rounded-lg border border-solid border-[#D0D5DD] ml-[auto] mr-[auto] mb-[5rem]">
          Back to Login
        </button>
      </article>
      <article className="hidden md:block">
        <img
          src="/images/questionMark.png"
          alt="question mark"
          className="mr-[auto] ml-[auto] "
        />
      </article>
    </section>
  );
};

export default ResetPasswordPage;
