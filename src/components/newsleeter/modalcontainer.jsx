import React from 'react';
import { NewsLetterInput } from './newsletterinput';
import newsletterclose from '../../assets/newsletterclose.png';
import newsletterpng from '../../assets/newsletterpng.png';
import mannews from '../../assets/mannews.png';
import PropTypes from 'prop-types';
import './styles/newsletter.css';

export const ModalContainer = ({ open, isOpen }) => {
  return (
    <div className="w-[90%] max-w-[873px] bg-white rounded-[8px] shadow-[4px_4px_2px_2px_rgba(0,0,0,0.25)] md:shadow-none md:mt-0 mt-[104px] ">
      <div className="relative flex bg-white rounded-l-[8px] ">
        <img
          src={newsletterclose}
          alt="newsletterclose"
          className="absolute w-[9.72px] h-[10.72px] block md:top-[-90px] md:left-[90px] right-[20px] top-[-30px] cursor-pointer"
          loading="lazy"
          onClick={() => isOpen(!open)}
        />
        <div className="newlettercontent__contiainer px-[18px] rounded-l-[8px] pt-[39px] bg-[#D2D2D2] md:bg-white pb-[48px] md:pt-[80px] md:pb-[114px] md:pl-[56px] md:pr-[61px] grow w-full ">
          <div className="flex justify-between">
            <div className="md:w-full">
              <article className="pt-[23px]">
                <small className="text-black md:text-[#464646] block mb-[30px] md:mb-0 font-bold md:font-black text-base md:text-lg tracking-[0.1em] md:tracking-none uppercase md:normal-case ">
                  Get our weekly
                </small>
                <p className="newsarticle md:text-main-1 font-black md:text-5xl leading-[28px] text-[24px] tracking-[0.1em] md:tracking-none md:leading-[60px]  md:normal-case uppercase">
                  Newsletter
                </p>
              </article>
              <article>
                <p className="mt-[19px] mb-[32px] md:mt-[25px] md:mb-[55px] md:leading-8 text-[#344054] text-[15px] md:text-base font-normal md:w-[397px]">
                  Get weekly updates on the newest letter options, gist and tips
                  right in your mailbox.
                </p>
              </article>
            </div>
            <img
              src={mannews}
              alt="mannews"
              className="md:hidden w-[119px] h-[113px] block top-[-90px] left-[90px] cursor-pointer"
              loading="lazy"
            />
          </div>
          <NewsLetterInput />
        </div>
        <img
          src={newsletterpng}
          alt="newletterpng"
          className="hidden md:block w-[229px] rounded-r-[8px]"
          loading="lazy"
        />
      </div>
    </div>
  );
};

ModalContainer.propTypes = {
  isOpen: PropTypes.func,
  open: PropTypes.bool,
};
