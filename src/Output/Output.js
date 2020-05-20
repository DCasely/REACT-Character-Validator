import React from 'react';
import './Output.css';

function Output(props) {
  return (
    <div className="Output" onClick={props.delete}>
      <p>{props.character}</p>
    </div>
  );
}

export default Output;
