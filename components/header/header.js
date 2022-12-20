import React from 'react';
import Link from "next/link";
import Image from "next/image";
import img from "../../assets/dropdown";
import image from "../../assets/iot";

const header = () => {
  return (
    <div className="flex justify-between py-5 pl-24 pr-28 border-solid border-b font-[Inter]">
      <div>
        <Image src={image.logo} width={154.37} height={48} alt="logo" />
      </div>
      <ul className="flex justify-between w-2/5 pt-2 text-sm">
        <Link href={"/transaction-dashboard"} className="no-underline">
          <li>Buy Meter</li>
        </Link>
        <Link href={"/transaction-history"} className="no-underline">
          <li>Transaction History</li>
        </Link>
        <Link href={"/transaction-history"} className="no-underline">
          <li>Contact</li>
        </Link>
        <Link
          href={"/transaction-history"}
          className="no-underline border-solid border-r"
        >
          <li className="mr-3">FAQ</li>
        </Link>

        <li>
          <Image
            src={img.arrow}
            width={10}
            height={5}
            alt="dropdown"
            className="mt-2"
          />
        </li>
      </ul>
    </div>
  );
}

export default header