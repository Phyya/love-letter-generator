import React from 'react';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';

//Bank Transfer Component
const BankTransfer = () => {
  return (
    <div className="">
      <p className="text-sm text-[#292D32] w-fit mx-auto my-3">
        Proceed to your bank app to complete this transfer
      </p>
      <div className="bg-[#F9F9F9] rounded-lg py-10 px-10 mb-6">
        <div className="px-2 border-b border-[#E0E0E0]">
          <h2 className="text-xs mb-1">ACCOUNT NUMBER</h2>
          <p className="text-lg font-avenir_bold">{'8545405246'}</p>
        </div>

        <div className="mt-6 px-2 border-b border-[#E0E0E0]">
          <h2 className="text-xs mb-1">BANK NAME</h2>
          <p className="text-lg font-avenir_bold">{'Wema Bank'}</p>
        </div>

        <div className="mt-6 px-2 border-b border-[#E0E0E0]">
          <h2 className="text-xs mb-1">BENEFICIARY</h2>
          <p className="text-lg font-avenir_bold">{'LoveMe Checkout'}</p>
        </div>

        <p className="text-sm mt-10 pl-2">
          The account details is only valid for this specific transaction and
          it&apos;ll expire by <strong>06:04PM</strong> (today)
        </p>
      </div>
      <Button name={'Make Payment'} height={'40px'} />
    </div>
  );
};

// Debit Card Payment Component
const CardPayment = () => {
  return (
    <form className="">
      <div className="text-gray-700 mt-6">
        <label htmlFor="card-number">Card Number</label>
        <InputField
          name={'card-number'}
          type={'text'}
          placeholder={'0000 0000 0000 0000'}
        />
      </div>

      <div className="mt-6 mb-8 flex items-center justify-between">
        <div className="text-gray-700 ">
          <label htmlFor="expiry-date">Valid Till</label>
          <InputField
            name={'expiry-date'}
            type={'text'}
            placeholder={'MM/YY'}
          />
        </div>

        <div className="text-gray-700 ">
          <label htmlFor="cvv">CVV</label>
          <InputField name={'cvv'} type={'text'} placeholder={'CVV'} />
        </div>
      </div>

      <Button name={'Make Payment'} height={'40px'} />
    </form>
  );
};

// FlutterWave Payment Component
const FlutterWave = () => {
  return (
    <form className="">
      <div className="mt-6 mb-8 flex justify-between">
        <div className="text-gray-700 ">
          <label htmlFor="first-name">First Name</label>
          <InputField
            name={'first-name'}
            type={'text'}
            placeholder={'First Name'}
          />
        </div>

        <div className="text-gray-700 ">
          <label htmlFor="last-name">Last Name</label>
          <InputField
            name={'last-name'}
            type={'text'}
            placeholder={'Last Name'}
          />
        </div>
      </div>

      <div className="text-gray-700 mt-6">
        <label htmlFor="email">Email Address</label>
        <InputField
          name={'email'}
          type={'email'}
          placeholder={'Email Address'}
        />
      </div>

      <div className="text-gray-700 mt-6 mb-6">
        <label htmlFor="amount">Amount</label>
        <InputField name={'amount'} type={'text'} value={'NGN 5000.00'} />
        <p className="text-sm font-avenir_light text-main-1 mt-2">
          This is a fixed amount and real debit
        </p>
      </div>

      <Button name={'Make Payment'} height={'40px'} />
    </form>
  );
};

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = React.useState('bank-transfer');

  const handleOnChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="font-avenir">
      <main className="flex items-start justify-between flex-col shadow-lg rounded-xl w-11/12 max-w-6xl mx-auto my-20 lg:flex-row-reverse ">
        <section className="w-[486px] bg-[#FAFAFA] rounded-tr-xl px-10 py-12 text-gray-900">
          <div className="flex items-start justify-between border-b-2 pb-6 px-5 mb-8 border-[#AFAFAF]">
            <div className="flex flex-col gap-1">
              <h2 className="text-[#334252] text-lg font-extrabold mb-2">
                {'Basic Letter Package'}
              </h2>
              <p className="font-medium text-sm ">
                Occassion: {'Our Anniversary'}
              </p>
              <p className="font-medium underline text-sm cursor-pointer">
                Remove
              </p>
            </div>
            <button className="text-main-1 flex justify-center items-center text-sm font-extrabold gap-4 pt-2">
              <img className="w-[14px]" src="checkout-img/edit.svg" />
              Edit Package
            </button>
          </div>

          <table className="w-full gap-4 font-medium border-b-2 border-[#AFAFAF] text-sm">
            <tr className="">
              <td className="pl-5 py-3">Subtotal</td>
              <td className="text-right pr-5 py-3">{'4000.00'}</td>
            </tr>
            <tr>
              <td className="pl-5 pb-3">VAT (10%)</td>
              <td className="text-right pr-5 pb-3">{'1000.00'}</td>
            </tr>
            <tr>
              <td className="pl-5 pb-8">Total Amount</td>
              <td className="text-right pr-5 pb-8 font-avenir_bold text-base">
                {'NGN 5000.00'}
              </td>
            </tr>
          </table>

          <div className="px-5 mt-8">
            <h2 className="text-[#334252] font-avenir_bold uppercase">
              Payment Method
            </h2>
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <input
                  defaultChecked
                  name={'payment-method'}
                  type={'radio'}
                  id={'bank-transfer'}
                  className="w-4 h-4"
                  onClick={handleOnChange}
                  value={'bank-transfer'}
                />
                <label
                  className="flex items-center justify-center gap-4 font-bold"
                  htmlFor={'bank-transfer'}
                >
                  <img
                    className="w-8"
                    src="checkout-img/bank.svg"
                    alt="bank transfer"
                  />
                  Bank Transfer
                </label>
              </div>

              <div className="flex items-center gap-4">
                <input
                  name={'payment-method'}
                  type={'radio'}
                  className="w-4 h-4"
                  onClick={handleOnChange}
                  id={'card-payment'}
                  value={'card-payment'}
                />
                <label
                  className="flex items-center justify-center gap-4 font-bold"
                  htmlFor={'card-payment'}
                >
                  <img
                    className="w-8"
                    src="checkout-img/card.svg"
                    alt="debit card transfer"
                  />
                  Debit Card Transfer
                </label>
              </div>

              <div className="flex items-center gap-4">
                <input
                  name={'payment-method'}
                  type={'radio'}
                  id={'flutterwave'}
                  className="w-4 h-4"
                  onClick={handleOnChange}
                  value={'flutterwave'}
                />
                <label
                  className="flex items-center justify-center gap-4 font-bold"
                  htmlFor={'flutterwave'}
                >
                  <img
                    className="w-8"
                    src="checkout-img/flutterwave.svg"
                    alt="flutterwave"
                  />
                  Flutterwave
                </label>
              </div>
            </div>
            <p className="text-xs mt-10 text-center font-ave font-avenir_light">
              Don&apos;t checkout until you&apos;re through editing your LoveMe.
            </p>
            <p className="text-center text-xs font-avenir_light mb-10">
              Edits are not allowed after checkout.
            </p>
          </div>
        </section>

        <section className="mt-16 mx-auto w-2/5">
          <h1 className="text-xl font-avenir_bold text-[#334252] py-4 border-b-2 border-[#E5E5E5] text-center">
            Checkout
          </h1>
          {paymentMethod === 'bank-transfer' && <BankTransfer />}
          {paymentMethod === 'card-payment' && <CardPayment />}

          {paymentMethod === 'flutterwave' && <FlutterWave />}
        </section>
      </main>
    </div>
  );
}
