import React from 'react';
import './ResetButton.css';

function ResetButton(props) {
  return (
    <button onClick={props.reset} className="ResetButton">
      Reset
    </button>
  );
}

export default ResetButton;
