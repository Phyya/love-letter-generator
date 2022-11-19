import React, { useState } from 'react';
// import Footer from '../../components/Footer';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiCheck } from 'react-icons/bi';
import CareerPageData from '../../data/careerpage';

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
    <div className="max-w-6xl m-auto p-5">
      <h1 className="h-20 py-5">Header</h1>
      <section className="relative w-full flex flex-row justify-between">
        <input
          type="text"
          className="border border[#d0d5dd] outline-none h-[50px] w-4/5 pl-8 rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search positions"
        />
        <AiOutlineSearch className="absolute top-5 left-2 text-[#b4b9bf]" />
        <button
          type="submit"
          className="bg-main-1 text-white flex justify-center items-center px-10 rounded-lg"
        >
          Search
        </button>
      </section>
      <section className="mt-7 mb-10 flex gap-5 cursor-pointer">
        <p onClick={() => setData(CareerPageData)}>All</p>
        <p onClick={() => filterResult('Lead Generation')}>Lead Generation</p>
        <p onClick={() => filterResult('Others')}>Others</p>
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
              <h2 className="text-xl">{item.Category}</h2>
              <div className="bg-[#f0f0f0] flex justify-between items-center p-5 mt-5 mb-5">
                <div className="flex flex-col">
                  <h3 className="text-lg">{item.Role}</h3>
                  {item.Position.map((extra) => {
                    return (
                      <div key={extra.fulltime} className="flex gap-5 mt-3">
                        <p className="bg-white flex items-center gap-3 px-3 py-1">
                          {extra.fulltime}
                          <BiCheck />
                        </p>
                        <p className="bg-white flex items-center gap-3 px-3 py-1">
                          {extra.remote} <BiCheck />
                        </p>
                      </div>
                    );
                  })}
                </div>
                <a href={item.link}>
                  <MdOutlineKeyboardArrowRight />
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CareerPage;
