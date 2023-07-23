import React from 'react';
import './footer.css';
import {
  AccountBalanceWallet,
  Explore,
  Notifications,
  Settings,
} from '@mui/icons-material';

function Footer() {
  return (
    <div className='footer'>
      <AccountBalanceWallet style={{ color: '#4C5968', fontSize: '1.8rem' }} />
      <Explore style={{ color: '#AEB8C4', fontSize: '1.8rem' }} />
      <Notifications style={{ color: '#AEB8C4', fontSize: '1.8rem' }} />
      <Settings style={{ color: '#AEB8C4', fontSize: '1.8rem' }} />
    </div>
  );
}

export default Footer;
