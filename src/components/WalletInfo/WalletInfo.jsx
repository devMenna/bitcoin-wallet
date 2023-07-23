import { ArrowBackIos } from '@mui/icons-material';
import React from 'react';
import './wallet-info.css';
import CryptoCardBox from '../CryptoCardBox/CryptoCardBox';

const WalletInfo = ({ onArrowBackClick }) => {
  return (
    <CryptoCardBox>
      <div className='overall-container' style={{ padding: '5%' }}>
        <div className='cryptoCardHeader'>
          <div className='cryptoCardInfo'>
            <img
              src='https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_1280.png'
              alt='Bitcoin'
              className='cryptoCardImage'
            />
            <p className='cryptoCardTitle'>Bitcoin</p>
          </div>
          <p className='cryptoCardAbbreviation'>BTC</p>
        </div>

        <div className='cryptoCardBody'>
          <p className='cryptoCardAmount'>3.529020 BTC</p>
          <div className='cryptoCardUSD'>
            <p>$19.153 USD</p>
            <div className='cryptoCardPercentage'>- 2.32%</div>
          </div>
        </div>
        <ArrowBackIos className='cryptoCardIcon' onClick={onArrowBackClick} />
      </div>
    </CryptoCardBox>
  );
};

export default WalletInfo;
