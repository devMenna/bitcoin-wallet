import React from 'react';
import './transaction-boxes.css';
import { AttachMoney } from '@mui/icons-material';

const SellBTC = () => {
  return (
    <div className='inner-box'>
      <AttachMoney
        sx={{
          color: 'white',
          background: 'linear-gradient(to bottom, #FE5C82, #FC2C9D)',
          borderRadius: '50%',
          padding: '10px',
          fontSize: '1.5rem',
        }}
      />
      <p>Sell BTC</p>
    </div>
  );
};

const BuyBTC = () => {
  return (
    <div className='inner-box'>
      <AttachMoney
        sx={{
          color: 'white',
          background: 'linear-gradient(to bottom, #18BBFA, #1C7EF2)',
          borderRadius: '50%',
          padding: '10px',
          fontSize: '1.5rem',
        }}
      />
      <p>Buy BTC</p>
    </div>
  );
};

const TransactionBoxes = () => {
  return (
    <div className='actions-container'>
      <BuyBTC />
      <SellBTC />
    </div>
  );
};

export default TransactionBoxes;
