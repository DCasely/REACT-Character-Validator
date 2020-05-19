import React, { useState } from 'react';
import ValidateLength from './ValidateLength/ValidateLength';
import CharComponent from './CharComponent/CharComponent';
import './App.css';

function App() {
  const [count, setCount] = useState('0');
  const [characterList, setCharacterList] = useState([]);

  function countLetters(e) {
    const characterInput = e.target.value;
    const characterCount = e.target.value.length;

    setCount(characterCount);
    setCharacterList(characterInput.split(''));
  }

  function removeCharacter(index) {
    setCharacterList(characterList.filter((character, idx) => idx !== index));
  }

  // CHARACTERS LESS THAN 5 OR MORE THAN 10
  let validateMessage = '';

  if (count < 5) {
    validateMessage = 'Must Have More 5 Characters';
  } else if (count >= 5 && count <= 10) {
    validateMessage = 'Perfect You Have The Right Amount of Characters';
  } else if (count > 10) {
    validateMessage = 'Must Have Less Than 10 Characters';
  }

  return (
    <div>
      <input onChange={countLetters} />

      <ValidateLength validate={validateMessage} />

      {characterList.map((character, index) => (
        <CharComponent
          id={index}
          key={index}
          character={characterList[index]}
          delete={() => removeCharacter(index)}
        />
      ))}
    </div>
  );
}

export default App;
