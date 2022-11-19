import React from 'react';
import { background, definitions, accounts, subscription } from './TermsConfig';

export default function TermsOfService() {
  return (
    <div className="container mx-auto p-5 mb-10 sm:w-3/5">
      <h1 className="text-center text-2xl font-medium sm:font-semibold">
        Terms of Service
      </h1>
      <div className="text-sec-2 text-xl my-5 sm:pt-5">
        <div>
          <p className="py-3">Write a Letter to your loved ones.</p>
          <p className="py-3">LoveMe Letter writer.</p>
          <p className="py-3 font-semibold">Terms of service.</p>
        </div>
        <div>
          <h1 className="py-6 mt-5 text-3xl">1. Background</h1>
          {background.map((text, index) => (
            <p className="py-3" key={index}>
              {text}
            </p>
          ))}
        </div>
        <div>
          <h1 className="py-6 mt-5 text-3xl">2. Definitions</h1>
          {definitions.map((text, index) => (
            <p className="py-3" key={index}>
              {text}
            </p>
          ))}
        </div>
        <div>
          <h1 className="py-6 mt-5 text-3xl">3. Creating an Account</h1>
          {accounts.map((text, index) => (
            <p className="py-3" key={index}>
              {text}
            </p>
          ))}
        </div>
        <div>
          <h1 className="py-6 mt-5 text-3xl">4. LoveMe Subscription</h1>
          {subscription.map((text, index) => (
            <p className="py-3" key={index}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
