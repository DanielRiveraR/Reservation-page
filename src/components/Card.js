import React from 'react';
import icon from '../icons_assets/creditcard.svg';

const Card = ({ src, alt, name, price, details }) => { 
  return (
    <div className='card'>
      <div className='card-img'>
        <img src={src} alt={alt} />
      </div>
      <div className='card-info'>
        <p className='card-name'>{name}</p>
        <p className='card-price'>{price}</p>
        <p className='card-details'>{details}</p>
      </div>
      <div className='button-container'>
        <a href='/order'>Order a delivery</a>
        <img className='delivery' src={icon} alt='' />
      </div>
    </div>
  );
};

export default Card;
