import React from "react";
import Image from "next/image";
import image from "../../assets/order";

const order = ({ setCurrenScreen }) => {
  const submitForm = () => {
    // move to the next screen 
    setCurrenScreen(1);
  };
  return (
    <>
      {" "}
      <div class="flex justify-center">
        <Image src={image.order} w-screen height={48} alt="logo" />
      </div>
      <div class=" sm:mx-auto sm:w-full sm:max-w-md my-5">
        <div class="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <div>
            <form onSubmit={submitForm} class="mb-0 space-y-6">
              <div>
                <label
                  for="text"
                  class="block text-sm font-medium text-gray-700"
                >
                  Meter Number
                </label>
                <div class="mt-1">
                  <input
                    autoComplete="off"
                    type="text"
                    id="meter"
                    cursor-pointer
                    placeholder=" "
                    required
                    class="w-full border bg-[#ECF7FD] border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label
                  for="State"
                  class="block text-sm font-medium text-gray-700"
                >
                  State
                </label>
                <div class="mt-1">
                  <select
                    name="state"
                    id=""
                    class="w-full border bg-[#ECF7FD] border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm font-medium text-gray-700"
                  >
                    <option value="">Please select</option>
                    <option value="">Lagos</option>
                    <option value="">Abuja</option>
                    <option value="">Edo</option>
                    <option value="">Oyo</option>
                    <option value="">Ogun</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  for="bill"
                  class="block text-sm font-medium text-gray-700"
                >
                  How much electricity do you want to buy?
                </label>
                <div class="mt-1">
                  <input
                    autoComplete="on"
                    type="text"
                    cursor-pointer
                    id="amount"
                    placeholder="# Enter Amount"
                    required
                    class="w-full border bg-[#ECF7FD] border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label
                  for="name"
                  class="flex text-sm font-medium text-gray-700"
                >
                  Name (Optional)
                </label>

                <div class="mt-1">
                  <input
                    type="text"
                    id="name"
                    placeholder=""
                    cursor-pointer
                    required
                    class="w-full border bg-[#ECF7FD] border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                class="w-full flex bg-[#054C73] justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Continue to Payment Information
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default order;
