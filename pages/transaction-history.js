import React from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Header from '../components/header/header';
import Transactions from '../components/transactions/transactions'

const transactionHistory = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <Transactions className="w-4/5 h-50" />
      </div>
    </div>
  );
}

export default transactionHistory
