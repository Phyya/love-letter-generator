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
import FooterTwo from '../components/FooterTwo';

const AboutPage = () => {
  return (
    <div className="font-avenir mt-[66px]">
      <Navbar />
      <div className="w-full relative">
          <img className="w-full" src={Img8} />
          <div className='w-full flex justify-center absolute md:top-[50%] top-[20%]'>
          <h1 className="text-[#fff] md:text-[3rem] text-[2rem]">
            About us
          </h1>
        </div>
      </div>
      <div className="w-4/5 m-auto mt-[40px]">
        <div className="relative m-auto inline-block mb-[1rem] w-full">
          <h5 className="md:text-[3rem] text-[2rem] m-auto text-[#04172A]">
            Our story
          </h5>
          <span className="absolute h-[2px] w-[3rem] md:w-[7rem] bg-[#D2120F] bottom-0 left-0"></span>
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
        <div className="relative m-auto inline-block mb-[1rem] mt-[40px]">
          <h5 className="md:text-[3rem] text-[2rem] m-auto text-[#04172A]">
            Meet the Team
          </h5>
          <span className="absolute h-[2px] w-[3rem] md:w-[7rem] bg-[#D2120F] bottom-0 right-0"></span>
        </div>
        <div className="flex flex-wrap justify-center gap-[20px] mt-[30px] mb-[30px]">
          <div className="relative">
            <img
              className="h-65 w-[238px] rounded-xl sm: w[225px]"
              src={Img1}
            />
            <div className="absolute bottom-0 left-0 backdrop-blur-[6px] p-[10px] border-[1px] text-[#fff] text-left text-sm">
              <h3 className='text-[16px]'>Mark Essien</h3>
              <p className="text-[12px]">CEO</p>
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
      <FooterTwo/>
    </div>
  );
};

export default AboutPage;
