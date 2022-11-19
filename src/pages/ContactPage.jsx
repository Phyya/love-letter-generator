import React from 'react';

const ContactPage = () => {
  return (
    <main className=" w-screen md:w-full flex flex-row">
      <section className="md:w-1/2 hidden md:block lg ">
        <img src="/contact.png" alt="" className="object-fill" />
      </section>
      <section
        id="form"
        className="w-screen md:w-1/2 md:pl-[81px] md:py-[95px] md:pr-[56px] px-[24px] py-[61px]"
      >
        <div>
          <div className="flex justify-center pb-[25px]">
            <img
              src="/logos_vivaldi-icon.png"
              alt="logo"
              className="md:hidden block w-[42px] h-[42px]"
            />
            <img
              src="/LoveMe.png"
              alt="logo"
              className="md:hidden block w-[120px] h-[32px] px-[12px] py-[4px] my-[4px] object-contain"
            />
          </div>
          <div>
            <p className="text-[#04172A] md:text-4xl text-2xl leading-[44px] font-medium">
              Get in touch with us!
            </p>
            <p
              className="text-[#383838] md:text-[#464646] text-sm md:text-base leading-8 md:leading-[44px] font-normal 
            tracking-tighter md:tracking-normal"
            >
              24/7 We offer our support services to ease your experiences
            </p>
          </div>
          <div className="flex flex-row md:py-[50px] md:px-[10px] py-[30px]">
            <div id="address" className="basis-2/7 md:basis-1/3">
              <img
                src="/location.png"
                alt="address"
                className="md:ml-[40px] md:mb-[20px] ml-[30px] mb-[19px] w-[10px] md:w-[16px] h-[13px] md:h-[19px]"
              />
              <p className="text-[#04172A] md:text-base text-xs leading-6 md:font-medium font-normal tracking-tighter md:tracking-normal">
                Lagos, Nigeria
              </p>
            </div>
            <div id="phone" className="basis-2/7 md:basis-1/3 ml-[12px]">
              <img
                src="/phone.png"
                alt="phone"
                className="md:ml-[55px] md:mb-[20px] ml-[38px] mb-[22px] w-[12px] h-[12px] md:w-[18px] md:h-[18px]"
              />
              <p className="text-[#04172A] md:text-base text-xs leading-6 md:font-medium font-normal tracking-tighter md:tracking-normal">
                +2349065745693
              </p>
            </div>
            <div id="phone" className="basis-3/7 md:basis-1/3 ml-[12px]">
              <img
                src="/email.png"
                alt="phone"
                className="md:ml-[70px] ml-[45px] mb-[22px] md:mb-[20px] w-[13px] h-[10px] md:w-[20px] md:h-[16px]"
              />
              <p className="text-[#04172A] md:text-base text-xs leading-6 md:font-medium font-normal tracking-tighter md:tracking-normal">
                contact.loveme@gmail.com
              </p>
            </div>
          </div>
        </div>
        <form action="" className="flex flex-col md:pr-[150px]">
          <div className="flex flex-col text-sm leading-5 text-[#344054]">
            <label htmlFor="text" className="">
              Full Name
              <input
                type="text"
                className="w-full h-[48px] bg-[#F9FAFB] text-[#667085] border-grey-300 mt-2 block px-3 pl-4 border 
            rounded-md outline-none appearance-none font-medium"
                placeholder="John Doe"
              />
            </label>
          </div>

          <div className="flex flex-col mt-[44px] text-sm leading-5 text-[#344054]">
            <label htmlFor="email">
              Email Address
              <input
                type="email"
                className="block w-full h-[48px] bg-[#F9FAFB] text-[#667085] border-grey-300 mt-2 block px-3 pl-4 border 
            rounded-md outline-none appearance-none font-medium"
                placeholder="johndoe@gmail.com"
              />
            </label>
          </div>

          <div className="flex flex-col mt-[32px] text-sm leading-5 text-[#344054]">
            <label htmlFor="tel">
              Phone Number
              <input
                type="tel"
                className="block w-full h-[48px] bg-[#F9FAFB] text-[#667085] border-grey-300 mt-2 block px-3 pl-4 border 
            rounded-md outline-none appearance-none font-medium"
                placeholder="+234 XXX XXX XXXX"
              />
            </label>
          </div>

          <div className="flex flex-col mt-[32px] text-sm leading-5 text-[#344054]">
            <label htmlFor="message">
              Write us a message
              <textarea
                name="message"
                id="message"
                className="w-full h-[144px] bg-[#F9FAFB] text-[#667085] border-grey-300 mt-2 block pt-5 pl-4 border 
            rounded-md outline-none appearance-none font-medium"
                placeholder="Type a message"
              ></textarea>
            </label>
          </div>

          <div id="button" className="mt-[40px]">
            <button
              className="w-full text-center text-white text-sm leading-5 py-[12px] bg-[#D2120F] rounded-lg 
            border border-[#D2120F]"
            >
              Send message
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
