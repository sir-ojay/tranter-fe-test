import React from 'react';
import Image from "next/image";
import image from "../../assets/payment/payment";
import card from "../../assets/ccard";


const payment = ({ setCurrenScreen }) => {
    const submitForm = () => {
      // move to the next screen
      setCurrenScreen(3);
    };
  return (
    <>
      <div class="flex justify-center">
        <Image src={image.payment} w-screen height={48} alt="logo" />
      </div>
      <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-md ">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <h5 className="text-base font-semibold mb-5">Payment</h5>

          <div className="flex justify-between mb-2">
            <div className="flex justify-content">
              <Image src={card.ccard} alt="credit-card" />
              <p className="ml-1 text-gray-400">Pay with Card</p>
            </div>

            <p className="text-sky-800">Change</p>
          </div>
          <div className="flex justify-between mb-5">
            <p className="text-sm text-gray-400">clientsemail@mail.com</p>
            <p>
              {" "}
              <a className="text-gray-400">Pay</a>{" "}
              <a className="text-sky-800"> NGN 700</a>
            </p>
          </div>

          <div>
            <form onSubmit={submitForm} className="mb-0 space-y-6 ">
              <h5 className="text-base font-semibold text-center">
                Enter your card details to pay
              </h5>
              <div>
                <label
                  for="text"
                  class="block text-sm font-medium text-gray-700 mt-1"
                >
                  Card Number
                </label>
                <div className="mt-1">
                  <input
                    autoComplete="off"
                    type="text"
                    id="meter"
                    cursor-pointer
                    placeholder="0000 0000 0000 0000 "
                    required
                    class="w-full border  bg-[#ECF7FD]  border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <div className="mr-1">
                  <label
                    for="Card Expire"
                    className="flex text-sm font-medium text-gray-700 "
                  >
                    Card Expire
                  </label>

                  <div className="mt-1">
                    <input
                      autoComplete="off"
                      type="text"
                      id="card"
                      cursor-pointer
                      placeholder="MM / YY "
                      required
                      class="w-full  bg-[#ECF7FD]  border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="cvv"
                    className="block text-sm font-medium text-gray-700"
                  >
                    CVV
                  </label>
                  <div className="mt-1">
                    <input
                      autoComplete="off"
                      type="text"
                      id="cvv"
                      cursor-pointer
                      placeholder="123"
                      required
                      class="w-full border  bg-[#ECF7FD]  border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center bg-[#054C73] py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Pay NGN 700
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <div className="py-2 px-5 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-[#ECF7FD] hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <p>Change Payment Method</p>
          </div>
          <div className="py-2 px-5 border border-transparent rounded-md shadow-sm text-sm font-medium   bg-[#ECF7FD]  hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <p>Cancel Payment </p>
          </div>
        </div>
        <p className="text-center my-5">
          Secured by <b> paystack</b>
        </p>
      </div>
    </>
  );
};

export default payment