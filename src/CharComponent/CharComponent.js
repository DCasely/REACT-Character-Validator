import React from 'react';
import './CharComponent.css';

function CharComponent(props) {
  return (
    <div className="CharComponent" onClick={props.delete}>
      <p>{props.character}</p>
    </div>
  );
}

export default CharComponent;
