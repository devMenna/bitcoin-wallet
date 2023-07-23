import React from 'react';
import './crypto-card-box.css';

const CryptoCardBox = ({ children }) => {
  return (
    <div className='container'>
      <div className='cryptoCard'>{children}</div>
    </div>
  );
};

export default CryptoCardBox;
