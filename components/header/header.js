import React from 'react';
import Link from "next/link";
import Image from "next/image";
// import image from "../../assets/dropdown";
import image from "../../assets";

const header = () => {
  return (
    <div className="flex space-y-96">
      <div>
        <Image src={image.logo} width={154.37} height={48} alt="logo" />
      </div>
      <ul>
        <Link href={"#"} className="no-underline">
          <li>Buy Meter</li>
        </Link>
        <Link href={"#"} className="no-underline">
          <li>Transaction History</li>
        </Link>
        <Link href={"#"} className="no-underline">
          <li>Contact</li>
        </Link>
        <Link href={"#"} className="no-underline ">
          <li>FAQ</li>
        </Link>


        <li>
          <Image src={image.arrow} width={4.37} height={2} alt="dropdown" />
        </li>
      </ul>
    </div>
  );
}

export default header