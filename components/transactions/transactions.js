import React from 'react';
import Image from "next/image";
import image from "../../assets/search";

const transactions = () => {
  return (
    <div className="border-solid border-l  pt-14 pl-9 pr-14 w-4/5 font-[Inter]    min-[350px]:max-[650px]:pt-5  min-[350px]:max-[650px]:w-full min-[350px]:max-[650px]:pl-5 min-[350px]:max-[650px]:pr-2">
      <div className="flex justify-between min-[350px]:max-[650px]:flex-col">
        <h4 className="text-2xl font-semibold min-[350px]:max-[650px]:text-xl">
          Transactions
        </h4>

        <div className="flex justify-between w-2/5 min-[350px]:max-[650px]:w-4/5 min-[350px]:max-[650px]:mt-4 ">
          <input
            type="text"
            placeholder="Search Transactions"
            id=""
            class="w-full border  border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <div className=" flex bg-[#054C73] w-32 rounded ml-1  px-2 x ">
            <Image
              src={image.search}
              width={14.37}
              height={48}
              alt="logo"
              className="ml-1 mt-1"
            />
            <p className="text-base text-white pl-1 pt-3">Search</p>{" "}
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-12 bg-[#ECF7FD33] h-14 px-6 pt-3 text-base text-[ #054C73] ">
        <div>
          <p>Date</p>
        </div>

        <div className="flex justify-between w-2/5 min-[350px]:max-[650px]:w-4/5 ">
          <p>Order No.</p>
          <p>Customer ID</p>
          <p>Amount</p>
        </div>
      </div>

      <h2 className="mt-8 text-2xl font-semibold pl-6 min-[350px]:max-[650px]:pl-5">
        NO TRANSACTIONS
      </h2>
    </div>
  );
}

export default transactions