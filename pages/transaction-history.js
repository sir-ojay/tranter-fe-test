import React from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Header from '../components/header/header';
import Transactions from '../components/transactions/transactions'

const transactionHistory = () => {
  return (
    <div className="h-screen font-[Inter]">
      <Header />
      <div className="flex">
        <Sidebar />
        <Transactions className="w-4/5 max-h-full md:max-h-screen" />
      </div>
    </div>
  );
}

export default transactionHistory
