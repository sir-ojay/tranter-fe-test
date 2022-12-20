import React, { useState } from 'react';
import Footer from '../components/footer/footer';
import Order from '../components/dashboard/order'
import Review from '../components/dashboard/review-order';
import Payment from '../components/dashboard/payment-info';
import Completed from '../components/dashboard/complete-order';
import Header from '../components/header/header';

const dashboard = () => {
  const [currentScreen,setCurrenScreen]= useState(0)
  return (
    <div>
      <Header />
      {currentScreen == 0 ? (
        <Order setCurrenScreen={setCurrenScreen} />
      ) : currentScreen == 1 ? (
        <Review setCurrenScreen={setCurrenScreen} />
      ) : currentScreen == 2 ? (
        <Payment setCurrenScreen={setCurrenScreen} />
      ) : currentScreen == 3 ? (
        <Completed />
      ) : (
        <Order />
      )}

      <Footer />
    </div>
  );
}

export default dashboard