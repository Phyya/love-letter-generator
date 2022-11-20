import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Navbar from '../components/Navbar/Navbar';
import FooterTwo from '../components/FooterTwo';
function LandingPage() {
  return (
    <>
      <Navbar />
      <section className="md:flex md:flex-row bg-[#FBF9F9] p-8 relative md:h-screen md:mx-auto md:items-center md:justify-center">
        <div className=" p-10 flex flex-col justify-center items-center text-center mx-auto gap-5  md:flex  md:text-start md:items-start md:mt-14">
          <h1 className="font-avenir_bold text-4xl mt-20 md:mt-0  text-main-7 leading-10 md:text-7xl md:w-3/5">
            Send that special one, all your ❤️
          </h1>
          <p className="font-avenir_light text-center text-main-8 text-lg leading-6 md:font-avenir md:font-black md:text-3xl md:text-start md:max-w-lg  ">
            Instantly share your deepest feelings with our AI generated letters
          </p>
          <button
            className="p-3 mt-6 w-28 bg-main-1 font-extrabold
         rounded-lg text-white text-lg md:text-xl md:w-44"
          >
            Try it
          </button>
        </div>
        <div className="hidden md:block mt-16 ">
          <img src="/emptycard.svg" alt="" className="w-full" />
        </div>
        <img
          src="/Vectorhero.svg"
          alt=""
          className="hidden md:block absolute bottom-2 left-4 "
        />
        <img
          src="/HERO LOVE-RIGHT.png"
          alt=""
          className="hidden md:block absolute bottom-6 mt-4"
        />
      </section>
      <section className="flex flex-col h-96 justify-center items-center text-center bg-[#FBD4D1] p-8 md:gap-10 md:p-20 md:h-screen md:mx-auto md:items-center md:justify-center">
        <h1 className="font-avenir_bold text-main-1 font-extrabold text-xl leading-6 md:font-avenir_bold md:text-6xl md:mt-20">
          Generate a love note in seconds
        </h1>
        <p className="font font-avenir_light text-xs leading-4 md:font-avenir md:font-black md:text-3xl md:w-3/4">
          We take the stress out of your love life using our proprietary AI
          technology
        </p>
        <div className="text-xs flex flex-col justify-center items-center gap-4 p-5">
          <div className="flex items-center justify-center  gap-3 md:gap-8">
            <button className="bg-main-1 text-white px-4 py-1 rounded-2xl md:p-3  md:text-xl md:rounded-full">
              Sweetheart
            </button>
            <button className="bg-white text-main-1 px-4 py-1 rounded-2xl border-2 border-red-400 md:p-3  md:text-xl md:rounded-full">
              Darling
            </button>
            <button className="bg-main-1 text-white rounded-2xl px-2 py-1 md:p-3  md:text-xl md:rounded-full">
              Honeypie
            </button>
            <button className="bg-white text-main-1 rounded-2xl px-3 py-1 border-2 border-red-400 md:p-3  md:text-xl md:rounded-full">
              Queen
            </button>
            <button className="hidden lg:block bg-main-1 text-white px-3 py-1 rounded-2xl md:p-3  md:text-xl md:rounded-full">
              Forever Love
            </button>
            <button className=" hidden lg:block bg-white text-main-1 px-4 py-1 rounded-2xl border-1 border-2 border-red-400 md:p-3  md:text-xl md:rounded-full">
              Sugar Plum
            </button>
          </div>
          <div className="flex content-center items-center justify-center gap-2 md:gap-8">
            <button className="bg-white text-main-1 px-2 py-1 rounded-2xl border-2 border-red-400 md:p-3 md:px-4  md:text-xl md:rounded-full">
              Slime
            </button>
            <button className="bg-main-1 text-white px-2 py-1 rounded-2xl md:px-5 md:p-3  md:text-xl md:rounded-full">
              loml
            </button>
            <button className="text-main-1 bg-white border-2 border-red-400 rounded-2xl px-2 py-1 md:p-3 md:px-4  md:text-xl md:rounded-full">
              Moonshot
            </button>
            <button className="bg-main-1 text-white rounded-2xl px-2 py-1 md:p-3  md:text-xl md:px-4 md:rounded-full">
              Cupcake
            </button>
            <button className="bg-white text-main-1 rounded-2xl border-2 border-red-400 px-2 py-1 md:p-3 md:px-4  md:text-xl md:rounded-full">
              Bird nest
            </button>
          </div>
          <div className="flex justify-center items-center gap-2 md:gap-8">
            <button className="bg-white text-main-1 px-2 py-1 rounded-2xl border-2 border-red-400 md:p-3 md:px-4  md:text-xl md:rounded-full">
              Cherry
            </button>
            <button className="bg-main-1 text-white px-2 py-1 rounded-2xl md:p-3  md:text-xl md:px-4 md:rounded-full">
              Firefly
            </button>
            <button className="bg-white text-main-1 rounded-2xl px-2 py-1 border-2 border-red-400 md:p-3 md:px-4 md:text-xl md:rounded-full">
              Divine
            </button>
            <button className="bg-main-1 text-white rounded-2xl px-3 py-1 md:p-3  md:text-xl md:px-4 md:rounded-full">
              Ride or die
            </button>
          </div>
          <div className="flex justify-around gap-2">
            <button className="bg-main-1 text-white px-4 py-1 rounded-2xl md:hidden md:p-3  md:text-xl md:rounded-full">
              Forever Love
            </button>
            <button className="bg-white text-main-1 px-4 py-1 rounded-2xl border-1 border-2 border-red-400 md:hidden md:p-3  md:text-xl md:rounded-full">
              Sugar Plum
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col p-10 relative md:flex md:flex-col md:p-20 md:h-screen md:mx-auto md:items-center md:justify-center bg-[#FBF9F9]">
        <div className="md:max-w-3xl md:mx-auto ">
          <div className="flex  p-3 gap-5  md:mx-auto">
            <img src="/Rectangle 34.svg" className="md:h-40" alt="" />
            <p className="font-avenir_light leading-7 md:font-avenir_light md:text-2xl lg:text-4xl">
              “Love me has been the defining moment for my relationship. I
              always like to share with my partner how much they mean to me.
              With Love me its now easier“
            </p>
          </div>
          <div className="flex justify-start mt-8">
            <img src="/large.svg" alt="" className="px-4" />
            <div>
              <h5 className="font-avenir_bold text-base">Favour</h5>
              <span className="text-[#C4C4C4] text-xs">Love Letter user</span>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src="/LOVE BOTTOM LEFT.png"
            alt=""
            className="md:absolute md:top-2 md:left-5 w-15 mt-4"
          />
          <img
            src="/LOVE LEFT.png"
            alt=""
            className="md:absolute md:bottom-10 right-7 w-15"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center text-center items-center gap-4 pb-6 md:flex md:flex-row md:justify-around md:items-center md:bg-[#F5D0CF] md:mx-auto md:p-40 md:px-1">
        <div>
          <h2 className=" w-96 font-avenir mt-10 font-black leading-8 text-2xl text-main-8 ">
            Here’s how to use Love me to generate your Love letter
          </h2>
          <button
            className="hidden md:block w-40 mx-auto p-3 bg-main-1 mt-7
         rounded-xl text-white text-xl md:w-44"
          >
            Try it
          </button>
        </div>
        <div className="grid grid-cols-1 gap-9 mt-7">
          <div className="flex items-center gap-6">
            <img src="/one.png" alt="" />
            <p className="font-avenir_bold text-base text-main-8">
              Select your key words
            </p>
          </div>
          <div className="flex items-center gap-6">
            <img src="/two.svg" alt="" />
            <p className="font-avenir_bold text-base text-main-8">
              Generate Letter
            </p>
          </div>
          <div className="flex items-center gap-5">
            <img src="/three.svg" alt="" />
            <p className="font-avenir_bold text-base text-main-8 md:">
              Pay and send your letter to the recipient
            </p>
          </div>
        </div>
        <button
          className=" w-40 mx-auto p-3 bg-main-1 mt-7
         rounded-xl text-white text-xl md:hidden"
        >
          Try it
        </button>
      </section>
      <section className="bg-[#FBF9F9] flex flex-col items-center justify-center gap-9 text-center p-36 relative">
        <h2 className="font-avenir_bold text-3xl text-main-7 mt-10">
          Join our waitlist
        </h2>
        <p className="font-avenir font-medium text-xl text-main-8 md:w-96">
          Be the first to know when we launch & also get exclusive offers
        </p>
        <div className="md:flex md:items-center md:justify-center md:gap-2 relative">
          <label
            htmlFor="email"
            className="flex justify-center items-center relative rounded-lg"
          >
            <input
              className="border-2 border-black p-2 w-80 rounded-lg"
              type="email"
              name="email"
              id="email"
              placeholder="eg.johndoe@gmail.com"
            />
            <BsArrowRight className="absolute right-4" />
          </label>
          <button
            className="hidden md:block w-40 mx-auto p-2 bg-main-1
         rounded-lg text-white text-xl"
          >
            Sign-up
          </button>
        </div>
        <div className="hidden  md:block">
          <img
            src="/LOVE RIGHT.png"
            alt=""
            className="md:absolute left-20 top-40  w-15"
          />
          <img
            src="/pink love left.png"
            alt=""
            className="md:absolute top-10 right-9 w-15"
          />
        </div>
      </section>
      <FooterTwo />
    </>
  );
}
export default LandingPage;
