import React from 'react';
import './CharComponent.css';

function CharComponent(props) {
  return (
    <div className="CharComponent">
      <h1>{props.character}</h1>
    </div>
  );
}

export default CharComponent;
