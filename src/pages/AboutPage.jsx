import React from 'react';
import Img1 from '../assets/Rectangle369.jpg';
import Img2 from '../assets/Rectangle370.jpg';
import Img3 from '../assets/Rectangle371.jpg';
import Img4 from '../assets/Rectangle372.jpg';
import Img5 from '../assets/Rectangle373.jpg';
import Img6 from '../assets/Rectangle374.jpg';
import Img7 from '../assets/Rectangle375.jpg';
import Img8 from '../assets/Rectangle3.png';
import Img0 from '../assets/Rectangle376.jpg';
import Navbar from '../components/Navbar/Navbar';

const AboutPage = () => {
  return (
    <div className="font-['Avenir'] mt-48">
      <Navbar />
      <div className="w-full relative">
        <img className="w-full" src={Img8} />
        <h2 className="text-[#fff] text-[2rem] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          About us
        </h2>
      </div>
      <div className="w-4/5 text-center m-auto">
        <div className="relative m-auto inline-block mb-[1rem]">
          <h5 className="text-[18px] md:text-[3rem] m-auto text-[#04172A]">
            Our story
          </h5>
          <span className="absolute h-[2px] w-[3rem] md:w-[7rem] bg-[#D2120F] bottom-0 right-0"></span>
        </div>
        <p className="text-2xl text-[#464646] mb-3">
          LoveMe is an organization under ZuriNG, with an interesting history
          and the ability to meet people’s needs for last longing love. It all
          started in the year 2020 when a group of friends decided to create a
          website where people could generate love letters. The idea was to use
          artificial intelligence to generate lettersthat sounded like they were
          written by a real person. Our company has come a long way since then.
        </p>
        <p className="text-2xl text-[#464646] mb-3">
          Today, LoveMe is one of the most popular websites in the world for
          generating love lettters. We have helped millions of people express
          their love for each other. we are located in Nigeria, but our team are
          from all over the world. we are a team of people who are passionate
          about their work and we love helping people express their love for
          each other in a unique way that will always trigger your love for your
          lover.
        </p>
        <p className="text-2xl text-[#464646] mb-3">
          Today, LoveMe is one of the most popular websites in the world for
          generating love lettters. We have helped millions of people express
          their love for each other. we are located in Nigeria, but our team are
          from all over the world. we are a team of people who are passionate
          about their work and we love helping people express their love for
          each other in a unique way that will always trigger your love for your
          lover.
        </p>
        <div className="relative m-auto inline-block mb-[1rem]">
          <h5 className="text-[18px] md:text-[3rem] m-auto text-[#04172A]">
            Meet the Team
          </h5>
          <span className="absolute h-[2px] w-[3rem] md:w-[7rem] bg-[#D2120F] bottom-0 right-0"></span>
        </div>
        <div className="grid grid-cols-1 justify-items-center content-center md:grid-cols-4 gap-9 sm:grid-cols-2 gap-4 m-auto mb-5">
          <div className="relative">
            <img
              className="h-65 w-[238px] rounded-xl sm: w[225px]"
              src={Img1}
            />
            <div className="absolute bottom-0 left-0 backdrop-blur-[6px] p-[10px] border-[1px] text-[#fff] text-left text-sm">
              <h3>Mark Essien</h3>
              <p className="text-[8px]">CEO</p>
            </div>
          </div>
          <div className="relative">
            <img className="h-65 w-[238px] rounded-xl" src={Img2} />
            <div className="absolute bottom-0 left-0 backdrop-blur-[6px] p-[10px] border-[1px] text-[#fff] text-left text-sm">
              <h3>Root Wranju</h3>
              <p className="text-[8px]">Project Manager</p>
            </div>
          </div>
          <div className="relative">
            <img className="h-65 w-[238px] rounded-xl" src={Img3} />
            <div className="absolute bottom-0 left-0 backdrop-blur-[6px] p-[10px] border-[1px] text-[#fff] text-left text-sm">
              <h3>Jade Olamide</h3>
              <p className="text-[8px]">Project Manager</p>
            </div>
          </div>
          <div className="relative">
            <img className="h-65 w-[238px] rounded-xl" src={Img4} />
            <div className="absolute bottom-0 left-0 backdrop-blur-[6px] p-[10px] border-[1px] text-[#fff] text-left text-sm">
              <h3>Elektra Success</h3>
              <p className="text-[8px]">Product designer</p>
            </div>
          </div>
          <div className="relative">
            <img className="h-65 w-[238px] rounded-xl" src={Img5} />
            <div className="absolute bottom-0 left-0 backdrop-blur-[6px] p-[10px] border-[1px] text-[#fff] text-left text-sm">
              <h3>Peter Felix</h3>
              <p className="text-[8px]">Product Designer</p>
            </div>
          </div>
          <div className="relative">
            <img className="h-65 w-[238px] rounded-xl" src={Img6} />
            <div className="absolute bottom-0 left-0 backdrop-blur-[6px] p-[10px] border-[1px] text-[#fff] text-left text-sm">
              <h3>Isaac Teddy</h3>
              <p className="text-[8px]">Lead Product Designer</p>
            </div>
          </div>
          <div className="relative">
            <img className="h-65 w-[238px] rounded-xl" src={Img7} />
            <div className="absolute bottom-0 left-0 backdrop-blur-[6px] p-[10px] border-[1px] text-[#fff] text-left text-sm">
              <h3>Odinaka Chris</h3>
              <p className="text-[8px]">Marketer</p>
            </div>
          </div>
          <div className="relative">
            <img className="h-65 w-[238px] rounded-xl" src={Img0} />
            <div className="absolute bottom-0 left-0 backdrop-blur-[6px] p-[10px] border-[1px] text-[#fff] text-left text-sm">
              <h3>Evelyn Itta</h3>
              <p className="text-[8px]">Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
