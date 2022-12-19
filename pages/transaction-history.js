import React from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Header from '../components/header/header';
import Transactions from '../components/transactions/transactions'

const transactionHistory = () => {
  return (
    <div className="px-5 py-2 mt-20">
      <Header />
      <Sidebar/>
      <Transactions/>
    
    </div>
  );
}

export default transactionHistory
