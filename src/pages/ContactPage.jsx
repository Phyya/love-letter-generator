import React from 'react';

const ContactPage = () => {
  return (
    <main className=" w-screen flex">
      <section className="w-1/2">
        <img src="/contact.png" alt="" className="object-fill" />
      </section>
      <section id="form" className="w-1/2 padding-[81px]">
        <div>
          <div>
            <p className="text-[#04172A] text-4xl leading-[44px]">
              Get in touch with us!
            </p>
            <p className="text-[#464646] text-base leading-8">
              24/7 We offer our support services to ease your experiences
            </p>
          </div>
          <div>
            <div id="address" className="">
              <img src="/location.png" alt="address" className="" />
              <p className="">Lagos, Nigeria</p>
            </div>
            <div id="phone" className="">
              <img src="/phone.png" alt="phone" className="" />
              <p className="">+2349065745693</p>
            </div>
            <div id="phone" className="">
              <img src="/email.png" alt="phone" className="" />
              <p className="">contact.loveme@gmail.com</p>
            </div>
          </div>
        </div>
        <form action="" className="">
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
            <label htmlFor="number">
              Phone Number
              <input type="number" />
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
    </main>
  );
};

export default ContactPage;
