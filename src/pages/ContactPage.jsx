import React from 'react';

const ContactPage = () => {
  return (
    <main className=" w-screen">
      <div className="flex flex col justify-center pt-[100px] pb-[119px]">
        <section
          id="contactInfo"
          className="px-auto text-white pt-[60px] pl-[100px] pr-[350px]"
        >
          <div id="address" className="flex ">
            <img
              src="/location.png"
              alt="address"
              className="w-[33px] h-[40px] mx-[15px] my-[6px]"
            />
            <div id="details">
              <p className="font-medium text-3xl leading-10">Address</p>
              <p className="font-thin text-lg leading-7 pl-[10px]">
                Lagos, Nigeria
              </p>
            </div>
          </div>

          <div id="phone" className="flex pt-[64px]">
            <img
              src="/phone.png"
              alt="phone"
              className="w-[32px] h-[32px] mx-[15px] my-[6px]"
            />
            <div id="details">
              <p className="font-medium text-3xl leading-10">Telephone</p>
              <p className="font-thin text-lg leading-7 pl-[10px]">
                +2349065745693
              </p>
            </div>
          </div>

          <div id="phone" className="flex pt-[64px]">
            <img
              src="/email.png"
              alt="phone"
              className="w-[36px] h-[29px] mx-[15px] my-[6px]"
            />
            <div id="details" className="pl-[10px]">
              <p className="font-medium text-3xl leading-10 text-left">
                Email Address
              </p>
              <p className="font-thin text-lg leading-7 ">
                contact.loveme@gmail.com
              </p>
            </div>
          </div>
        </section>

        <section id="form" className="w-[441px] bg-white rounded-lg px-[162px]">
          <form action="" className="pt-[60px] pb-[84px]">
            <div>
              <label htmlFor="text">
                Full Name
                <input type="text" />
              </label>
            </div>

            <div>
              <label htmlFor="email">
                Email Address
                <input type="email" />
              </label>
            </div>

            <div>
              <label htmlFor="message">
                Write a note
                <textarea name="message" id="message"></textarea>
              </label>
            </div>

            <div id="button">
              <button>Send</button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
