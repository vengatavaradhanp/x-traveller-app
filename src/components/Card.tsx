import React from 'react';

interface CardProps {
  backdrop: string;
}

const Card: React.FC<CardProps> = ({ backdrop }) => {
  return (
    <div style={{ color: 'lightgrey' }}>
      {backdrop} upcoming
    </div>
  );
};

export default Card;
