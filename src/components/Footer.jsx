import React from 'react';
import Logo from './Logo';
import Socials from './Socials';

function Footer() {
  return (
    <div className="bg-sec-1 w-full text-white flex flex-col md:py-5 :px-8">
      <div className="md:flex ">
        <div className="md:flex md:flex-col md:gap-14">
          <Logo />
          <div className="py-11 px-8 flex justify-between font-avenir_light md:hidden">
            <div className="flex flex-col gap-2">
              <a href="/blog">Blog</a>
              <a href="/generator">Letter Generator</a>
              <a href="/faq">FAQ</a>
              <a href="">Privacy Policy</a>
              <a href="/career">Career</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/pricing">Pricing</a>
              <a href="/about">About LoveMe</a>
              <a href="/contact">Contact Us</a>
              <a href="/sitemap">Sitemap</a>
              <a href="/terms">Terms & Conditions</a>
            </div>
          </div>
          <Socials />
        </div>
        <div className="invisible md:visible md:flex md:gap-9 md:text-sm md:mr-8">
          <div className="flex flex-col gap-1 md:mt-8">
            <a href="/blog">Blog</a>
            <a href="/generator">Letter Generator</a>
            <a href="/faq">FAQ</a>
            <a href="/policy">Privacy Policy</a>
          </div>
          <div className="flex flex-col gap-1 md:mt-8">
            <a href="/pricing">Pricing</a>
            <a href="/terms">Terms and Conditions</a>
            <a href="/FAQ">FAQ</a>
            <a href="about">About Love Me</a>
          </div>
          <div className="flex flex-col gap-1 md:mt-8">
            <a href="/contact">Contact Us</a>
            <a href="/sitemap">Sitemap</a>
          </div>
        </div>
      </div>
      <div className="px-7 -mt-52 mb-4 md:mt-0 md:my-">
        <hr className="md:mt-10" />
      </div>
      <p className="ml-7 mb-14 md:mt-5">2022 © Copyright reserved</p>
    </div>
  );
}

export default Footer;
