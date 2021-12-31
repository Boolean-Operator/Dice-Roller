import React from 'react';
import './Die.css';

function Die(props) {
  return(
    <i className={`Die fas fa-dice-${props.face} fa-5x ${ props.rolling ? 'tumbling':"" }`} />
  ); 
}

export default Die;