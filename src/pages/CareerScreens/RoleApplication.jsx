import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { BsCheck2All } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../../styles/careerpage.css';

const RoleApplication = () => {
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [profile, setProfile] = useState('');
  const [errorname, setErrorname] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorCheckbox, setErrorCheckbox] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [emailValidError, setEmailValidError] = useState(false);
  const [errorProfile, setErrorProfile] = useState(false);

  const [showModal, setShowModal] = useState(false);
  // Setting the input errors to false when there's a change in input
  useEffect(() => {
    if (name) {
      setErrorname(false);
    }
    if (email) {
      setErrorEmail(false);
      setEmailValidError(false);
    }
    if (validateEmail(email)) {
      setEmailValidError(false);
    }
    if (profile) {
      setErrorProfile(false);
    }
    if (checkbox) {
      setErrorCheckbox(false);
    }
  }, [name, email, profile, checkbox]);

  const validateEmail = (e) => {
    return String(e)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setErrorname(true);
    } else if (!email) {
      setErrorEmail(true);
      setEmailValidError(false);
    } else if (!validateEmail(email)) {
      setEmailValidError(true);
    } else if (!profile) {
      setErrorProfile(true);
    } else if (!checkbox) {
      setErrorCheckbox(true);
    } else {
      // IF no error, the form can be submitted successfully
      setShowModal(true);

      setErrorname(false);
      setErrorEmail(false);
      setErrorCheckbox(false);
      setErrorProfile(false);
      setEmailValidError(false);
      e.target.reset();
    }
  };

  return (
    <>
      <section className="bg-sec-1 text-white w-full py-4">
        <div className="max-w-6xl m-auto text-2xl">
          <Link to="/career" className="flex gap-4 items-center">
            <MdOutlineKeyboardArrowLeft className="h-6 w-6" />
            See all positions
          </Link>
        </div>
      </section>
      <section className="max-w-6xl m-auto p-5">
        <h1 className="text-3xl text-sec-1 mt-8 mb-2">
          Customer Insights Associate (Full-time) (Remote)
        </h1>
        <p className="text-[#464646] text-2xl space-x-5">
          Fulltime <span>Remote</span>
        </p>
        <div className="mt-8 mb-10">
          <h3 className="text-xl md:text-3xl mb-2">
            We are interested in meeting you
          </h3>
          <p className="text-2xl">
            We appreciate you showing interest in LoveMe. Please complete the
            short form below. Please email us at jobs@loveme.com if you
            experience any problems uploading your data.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="" className="application-label w-full">
              Fullname
              <input
                type="text"
                name="username"
                className="application-input"
                onChange={(e) => setname(e.target.value)}
                placeholder="Surname First"
              />
              {errorname && (
                <span className="text-[#F83F23] text-[14px]">
                  Please enter your full name
                </span>
              )}
            </label>
          </div>

          <section className="w-full flex lg:flex-row flex-col lg:gap-20 mt-3">
            <label htmlFor="" className="application-label lg:w-1/2 w-full">
              Email
              <input
                type="email"
                name="email"
                className="application-input"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              {errorEmail && (
                <span className="text-[#F83F23] text-[14px]">
                  Please enter your email address
                </span>
              )}
              {emailValidError && (
                <span className="text-[#F83F23] text-[14px]">
                  Email is incorrect
                </span>
              )}
            </label>

            <label htmlFor="" className="application-label lg:w-1/2 w-full">
              LinkedIn Profile
              <input
                type="text"
                name="profile"
                className="application-input"
                onChange={(e) => setProfile(e.target.value)}
                placeholder="Paste link here"
              />
              {errorProfile && (
                <span className="text-[#F83F23] text-[14px]">
                  Please enter your linkedIn url
                </span>
              )}
            </label>
          </section>
          <section className="max-w-6xl flex md:flex-row flex-col md:gap-10 m-auto">
            <button
              className="bg-[#e0e0e0] h-[250px] md:w-1/2 mt-7 rounded border-none"
              type="button"
            >
              <label htmlFor="image-upload" className="items-center">
                <p className="border-dashed border-2 border-[#333333] rounded p-16 max-w-xs lg:max-w-md m-auto">
                  Click to choose multiple files
                </p>
                <input type="file" hidden id="image-upload" />
              </label>
            </button>
            <button
              className="bg-[#e0e0e0] h-[250px] md:w-1/2 mt-7 rounded border-none"
              type="button"
            >
              <label htmlFor="image-upload" className="items-center">
                <p className="border-dashed border-2 border-[#333333] rounded p-16 max-w-xs lg:max-w-md m-auto">
                  Click to choose multiple files
                </p>
                <input type="file" hidden id="image-upload" />
              </label>
            </button>
          </section>
          <div className="max-w-6xl space-x-4 m-auto mb-16 font-semibold p-3">
            <input
              type="checkbox"
              onChange={(e) => setCheckbox(e.target.value)}
              className="rounded h-4 w-4"
            />
            <label htmlFor="" className="text-2xl">
              I hereby confirm that i have read and understood the
              <span className="text-main-1 border-b border-main-1">
                {' '}
                Data Privacy Policy
              </span>
              *
            </label>
            {errorCheckbox && (
              <span className="text-[#F83F23] text-[14px]">
                Please select checkbox to proceed
              </span>
            )}
          </div>
          <button type="submit" className="send_application">
            Send Application
          </button>
          <Link to="/career">
            <button type="" className="cancel_application">
              Cancel
            </button>
          </Link>
        </form>
      </section>

      {showModal ? (
        <>
          <div className="justify-center flex overflow-hidden fixed inset-0 z-50 ">
            <div className="relative lg:w-1/3 w-full p-5 px-5 lg:px-0 mt-auto mb-auto overflow-hidden">
              <div className="shadow-lg relative flex flex-col w-full bg-white rounded-xl outline-none focus:outline-none">
                <div className="relative p-10 flex-auto">
                  <AiOutlineClose
                    className="cursor-pointer"
                    onClick={() => setShowModal(false)}
                  />

                  <h1 className="font-semibold my-5 flex items-center">
                    <span className="text-green-600">
                      <BsCheck2All className="h-5 w-5" />
                    </span>
                    Congratulations, your action was successful
                  </h1>
                  <p>
                    We&apos;ve received your response. If your qualifications
                    fit our needs, a human resource representative will get in
                    touch with you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-20 fixed inset-0 z-30 bg-black overflow-hidden" />
        </>
      ) : null}
    </>
  );
};

export default RoleApplication;
