import React from 'react';
import axios from 'axios';
import '../../styles/SignUp.css'

import { signinImage, eyeIcon, eyeCancel } from '../../assets';
import Logo from '../../components/Logo';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [emailValidError, setEmailValidError] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { dispatch } = useAuthContext();

  useEffect(() => {
    if (email) {
      setErrorEmail(false);
      setEmailValidError(false);
    }
    if (validateEmail(email)) {
      setEmailValidError(false);
    }
    if (!password) {
      setErrorPassword(false);
    }
  }, [email, password]);
  const validateEmail = (e) => {
    return String(e)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };
  const passwordToggle = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setErrorEmail(true);
      setEmailValidError(false);
    } else if (!validateEmail(email)) {
      setEmailValidError(true);
    } else if (!password) {
      setErrorPassword(true);
    } else {
      // IF no error, the form can be submitted successfully
      const { data } = await axios.post('login/', {
        email,
        password,
      });
      dispatch({ type: 'LOGIN', payload: data.user });
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);
      localStorage.setItem('user', JSON.stringify(data.user));
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${localStorage.getItem('token')}`;
      setErrorEmail(false);
      setErrorPassword(false);
      setEmailValidError(false);
    }
  };
  return (
    <div className="flex flex-row items-stretch w-full font-avenir">
      <div className="md:w-[50%] w-full xl:px-[151px] lg:px-[60px] px-[16px] md:py-[56px] py-[32px]">
        <Logo />
        <div className="font-[400] mt-[48px]">
          <h1 className="text-[40px]">Welcome back</h1>
          <p className='text-[16px]'>Please enter your details</p>
        </div>
        <form
          className="w-full mt-[36px] flex flex-col gap-[24px]"
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col gap-[8px] w-full">
            <span className="text-gray-700 text-[14px] font-[500]">Email</span>
            <input
              className={`input border ${
                errorEmail || emailValidError
                  ? 'border-[#F83F23] input-error-border'
                  : 'border-gray-300 input-border'
              } rounded-[8px] py-[10px] px-[14px]  outline-[#475467]`}
              type="text"
              placeholder="name@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errorEmail && (
              <span className="text-[#F83F23] text-[14px] ">
                Please enter your email address
              </span>
            )}
            {emailValidError && (
              <span className="text-[#F83F23] text-[14px] ">
                Email is incorrect
              </span>
            )}
          </label>
          <label className="flex flex-col gap-[8px] w-full ">
            <span className="text-gray-700 text-[14px] font-[500]">
              Password
            </span>
            <div className="flex w-full relative">
              <input
                className={`w-full input border ${
                  errorPassword ? 'border-[#F83F23] input-error-border' : 'border-gray-300 input-border'
                } rounded-[8px] py-[10px] px-[14px] outline-[#475467]`}
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword && (
                <img
                  className="absolute top-[13px] right-[16px] cursor-pointer"
                  src={eyeIcon}
                  alt="eyeicon"
                  onClick={() => passwordToggle()}
                />
              )}
              {!showPassword && (
                <img
                  className="absolute top-[11px] right-[16px] cursor-pointer"
                  src={eyeCancel}
                  alt="eyeicon"
                  onClick={() => passwordToggle()}
                />
              )}
            </div>
            {errorPassword && (
              <span className="text-[#F83F23] text-[14px] ">
                Please enter your password
              </span>
            )}
          </label>
          <div className="flex justify-between">
            <label className="flex items-start gap-[12px]">
              <input
                className="h-[20px] w-[20px] rounded-[6px]"
                type="checkbox"
              />
              <span className='text-[16px]'>Remember me</span>
            </label>
            <Link to='/reset-password' className='text-[16px]'>Forgot password?</Link>
          </div>
          <label className="flex flex-col gap-[6px] w-full mt-[8px]">
            <input
              className="cursor-pointer border border-[#D2120F] rounded-[8px] py-[12px] px-[14px] bg-[#D2120F] text-white hover:bg-white hover:text-[#D2120F] transition-all"
              id="btn__submit"
              type="submit"
              value="Sign In"
            />
          </label>
          <div className='flex gap-[5px]'>
            <p className='text-[16px]'>
              Don`t have an account?{' '}
            </p>
            <Link to="/signup" className="text-[#D2120F] font-[850] text-[16px]">
              Sign Up
            </Link>{' '}
          </div>
        </form>
      </div>
      <div className="hidden md:block w-[50%]">
        <img
          className="w-full h-[100%]"
          src={signinImage}
          alt="backgroundimage"
        />
      </div>
    </div>
  );
}
