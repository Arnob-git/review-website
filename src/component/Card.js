import React from 'react';
import { NavLink } from 'react-router-dom';
const Card = (props) => {
  const { name, img, price } = props.service;

  return (
    <>
      <div className="card border border-info col-md-3 m-3 py-2 in">
        <div style={{ overflow: 'hidden' }}>
          <img src={img} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6>Price: {price}</h6>
        </div>
        <NavLink className='btn btn-info' to='/contact' onClick={() => alert('Please subscribe first')}>Go Now</NavLink>
      </div>
    </>
  )
}
export default Card;