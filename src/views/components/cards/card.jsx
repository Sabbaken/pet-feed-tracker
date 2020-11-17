import React from 'react';

const Card = ({ className, children }) => (
  <div className={`card ${className}`}>
    {children}
  </div>
);

export default Card;
