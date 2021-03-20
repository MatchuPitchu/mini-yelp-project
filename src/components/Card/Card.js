import React from 'react';
import './Card.css';

/**
* @author
* @function Card
**/

const Card = (props) => {
  return(
    <div className="card" style={{ width: props.width ? props.width: '100%' }} {...props}>
        {props.children}
    </div>
   )

 }

export default Card