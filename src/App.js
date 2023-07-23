import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import WalletInfo from './components/WalletInfo/WalletInfo';
import ExtraInfo from './components/ExtraInfo/ExtraInfo';
import GraphBox from './components/GraphBox/GraphBox';
import TransactionBoxes from './components/TransactionBoxes/TransactionBoxes';
import Footer from './components/Footer/Footer';

const App = () => {
  const [showExtraInfo, setShowExtraInfo] = useState(false);

  const handleExtraInfoToggle = () => {
    setShowExtraInfo((prevState) => !prevState);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.5s ease',
      }}
    >
      <Navbar />
      <WalletInfo onArrowBackClick={handleExtraInfoToggle} />
      {showExtraInfo && <ExtraInfo />}
      <GraphBox />
      <TransactionBoxes />
      <Footer />
    </div>
  );
};

export default App;
