import React from 'react';
import './extra-info.css';

const ExtraInfo = () => {
  const filter = ['Day', 'Week', 'Month', 'Year'];
  return (
    <div className='filter-list'>
      {filter.map((elem) => (
        <div className='filter-element' key={elem}>
          {elem}
        </div>
      ))}
    </div>
  );
};

export default ExtraInfo;
