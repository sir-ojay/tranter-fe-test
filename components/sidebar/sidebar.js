import React from 'react';
import image from "../../assets";
import Image from "next/image";
const sidebar = () => {
  return (
    <>
      <ul className="w-80 pt-14 px-10">
        <li className="mb-2.5">
          <Image src={image.avatar} width={14.37} height={4} alt="logo" />
          <span>Quick Purchase</span>
        </li>

        <li className="list-none hover:text-slate-400">
          <Image src={image.key} width={10} height={5} alt="logo" />
          <span>Transactions</span>
        </li>

        <li className="list-none">
          <Image src={image.list} width={10} height={5} alt="logo" />
          <span>Contact Us</span>
        </li>
        <li className="list-none">
          <Image src={image.list} width={10} height={5} alt="logo" />
          <span>My Meters</span>
        </li>
        <li className="list-none">
          <Image src={image.list} width={10} height={5} alt="logo" />
          <span>Virtual Accounts</span>
        </li>
        <li className="list-none">
          <Image src={image.list} width={10} height={5} alt="logo" />
          <span>My Cards</span>
        </li>
        <li className="list-none">
          <Image src={image.list} width={10} height={5} alt="logo" />
          <span>Request Utility Bill</span>
        </li>
        <li className="list-none">
          <Image src={image.list} width={10} height={5} alt="logo" />
          <span>View Profile</span>
        </li>
      </ul>
    </>
  );
}

export default sidebar