import React from 'react';
import './Input.css';

function Input(props) {
  return (
    <input
      onChange={props.getInput}
      value={props.characters}
      className="Input"
      type="text"
      placeholder="Validator"
    />
  );
}

export default Input;
