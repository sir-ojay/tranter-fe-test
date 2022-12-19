import React from 'react'

const transactions = () => {
  return (
    <div>
      <div className='flex'>
        <h4>Transactions</h4>

        <div>
          <input type="text" placeholder="Search Transactions" id="" />
          <div>Search</div>
        </div>
      </div>

      <div className="flex">
        <div>
          <p>Date</p>
        </div>

        <div>
          <p>Order No.</p>
          <p>Customer ID</p>
          <p>Amount</p>
        </div>
      </div>

      <h2>NO TRANSACTIONS</h2>
    </div>
  );
}

export default transactions