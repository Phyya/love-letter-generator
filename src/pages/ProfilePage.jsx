import React from 'react';
import { PersonalInfo } from '../components/Profile/PersonalInfo';
import { SecurityInfo } from '../components/Profile/Security';
import { LinkedAccounts } from '../components/Profile/LinkedAccounts';

export default function ProfilePage() {
  return (
    <>
      <div className="w-[min(100%,780px)] mx-auto py-20">
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src="/dp.png"
              alt="dp"
              className="w-[170px] h-[170px] object-contain block"
            />
            <button className="absolute bottom-2 right-0">
              <img src="/Camera.svg" alt="came" />
            </button>
          </div>

          <div className="text-center mt-6">
            <h1 className="text-2xl font-black font-avenir_bold">
              Oderinde Caleb
            </h1>
            <p className="">@octa</p>
          </div>
        </div>

        <div className="flex flex-col gap-14 mt-20 px-4">
          <PersonalInfo />
          <SecurityInfo />
          <LinkedAccounts />
        </div>
      </div>
    </>
  );
}
