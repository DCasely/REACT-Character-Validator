import React from 'react';
import './DeleteInstructions.css';

function DeleteInstructions(props) {
  return (
    <p className="DeleteInstructions">
      You Can <span onClick={props.deleteAll}>DELETE</span> characters by
      Clicking On Them Individually Above.
    </p>
  );
}

export default DeleteInstructions;
