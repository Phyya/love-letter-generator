import React, { useState } from 'react';
// import Footer from '../../components/Footer';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiCheck } from 'react-icons/bi';
import CareerPageData from '../../data/careerpage';
import Navbar from '../../components/Navbar/Navbar';
import FooterTwo from '../../components/FooterTwo';

const CareerPage = () => {
  const [data, setData] = useState(CareerPageData);
  const [search, setSearch] = useState('');

  const filterResult = (category) => {
    const result = CareerPageData.filter((currentData) => {
      return currentData.Section === category;
    });
    setData(result);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl m-auto p-5 mt-16">
        <section className="relative w-full flex flex-row gap-5 justify-between">
          <input
            type="text"
            className="border border[#d0d5dd] outline-none h-[50px] w-4/5 pl-8 rounded-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search positions"
          />
          <AiOutlineSearch className="absolute top-7 left-2 w-7 h-7 text-[#b4b9bf]" />
          <button
            type="submit"
            className="bg-main-1 border-none text-white flex justify-center items-center px-10 rounded-lg"
          >
            Search
          </button>
        </section>
        <section className="mt-7 mb-10 flex gap-5 text-xl">
          <p onClick={() => setData(CareerPageData)} className="cursor-pointer">
            All
          </p>
          <p
            onClick={() => filterResult('Lead Generation')}
            className="cursor-pointer"
          >
            Lead Generation
          </p>
          <p onClick={() => filterResult('Others')} className="cursor-pointer">
            Others
          </p>
        </section>
        {data
          .filter((item) => {
            return search.toLowerCase() === ''
              ? item
              : item.Role.toLowerCase().includes(search);
          })
          .map((item) => {
            return (
              <div key={item.sn}>
                <h2 className="text-2xl">{item.Category}</h2>
                <div className="bg-[#f0f0f0] flex justify-between items-center p-8 mt-8 mb-5">
                  <div className="flex flex-col">
                    <h3 className="text-xl">{item.Role}</h3>
                    {item.Position.map((extra) => {
                      return (
                        <div key={extra.fulltime} className="flex gap-5 mt-5">
                          <p className="bg-white flex items-center gap-3 text-xl px-4 py-2">
                            {extra.fulltime}
                            <BiCheck className="h-7 w-7" />
                          </p>
                          <p className="bg-white flex items-center gap-3 text-xl px-4 py-2">
                            {extra.remote} <BiCheck className="h-7 w-7" />
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <a href={item.link}>
                    <MdOutlineKeyboardArrowRight className="w-10 h-10" />
                  </a>
                </div>
              </div>
            );
          })}
      </div>
      <FooterTwo />
    </>
  );
};

export default CareerPage;
