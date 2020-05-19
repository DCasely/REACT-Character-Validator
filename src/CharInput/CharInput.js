import React from 'react';
import './CharInput.css';

function CharInput(props) {
  return (
    <input
      onChange={props.getInput}
      value={props.characters}
      className="CharInput"
      type="text"
      placeholder="Validator"
    />
  );
}

export default CharInput;
