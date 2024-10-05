import React from 'react';

const StatisticsCard = ({ title, data, total, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3>{title}</h3>
      <p>{total ? `Total: ${total}` : ''}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default StatisticsCard;
