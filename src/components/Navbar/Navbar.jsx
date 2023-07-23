import React, { useState } from 'react';
import './navbar.css';
import {
  ArrowBackIosNew,
  ArticleOutlined,
  Crop32,
  FileUploadOutlined,
  MoreVert,
  RemoveCircleOutline,
} from '@mui/icons-material';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleClose = () => {
    setShowMenu(false);
  };

  return (
    <nav>
      <button className='navbar-button'>
        <ArrowBackIosNew className='nav-icon' />
      </button>
      <span className='navbar-title'>Bitcoin Wallet</span>
      <button className='navbar-button' onClick={handleMenuClick}>
        <MoreVert className='nav-icon' sx={{ fontSize: 'x-large' }} />
      </button>
      {showMenu && <div className='backdrop' onClick={handleClose}></div>}
      {showMenu && (
        <div className='menu' onMouseLeave={handleClose}>
          <div className='menu-item' onClick={handleClose}>
            <span>Edit</span>
            <Crop32 className='nav-icon menu-icon' />
          </div>
          <hr className='vert-divider' />
          <div className='menu-item' onClick={handleClose}>
            <span>Courier Info</span>
            <ArticleOutlined className='nav-icon menu-icon' />
          </div>
          <hr className='vert-divider' />
          <div className='menu-item' onClick={handleClose}>
            <span>Share</span>
            <FileUploadOutlined className='nav-icon menu-icon' />
          </div>
          <hr className='vert-divider' />
          <div className='menu-item' onClick={handleClose}>
            <span>Remove</span>
            <RemoveCircleOutline
              className='nav-icon menu-icon'
              sx={{ color: 'red' }}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
