import React, { useState } from 'react';
import Header from './Header/Header';
import CharInput from './CharInput/CharInput';
import ValidateLength from './ValidateLength/ValidateLength';
import CharComponent from './CharComponent/CharComponent';
import DeleteInstructions from './DeleteInstructions/DeleteInstructions';
import ResetButton from './ResetButton/ResetButton';
import './App.css';

function App() {
  const initialInput = 'validator';
  const [characterList, setCharacterList] = useState(initialInput.split(''));
  const [count, setCount] = useState(characterList.length);

  function countLetters(e) {
    const characterInput = e.target.value;
    const characterCount = characterInput.length;
    setCharacterList(characterInput.split(''));
    setCount(characterCount);
  }

  function removeCharacter(index) {
    setCharacterList(characterList.filter((character, idx) => idx !== index));
  }

  function deleteAll() {
    setCharacterList([]);
    setCount(0);
  }

  function resetValidator() {
    setCharacterList(initialInput.split(''));
    setCount(initialInput.split(''));
  }

  // VALIDATE MESSAGE
  const min = 5;
  const max = 15;
  let validateMessage = '';

  if (count < min) {
    validateMessage = 'Must Have At Least 5 Characters';
  } else if (count >= min && count <= max) {
    validateMessage = '';
  } else if (count > max) {
    validateMessage = 'Must Have Less Than 16 Characters';
  }

  return (
    <div>
      <Header />

      <CharInput getInput={countLetters} characters={characterList.join('')} />

      <ValidateLength validate={validateMessage} />

      <div className="CharComp-Container">
        {characterList.map((character, index) => (
          <CharComponent
            id={index}
            key={index}
            character={characterList[index]}
            delete={() => removeCharacter(index)}
          />
        ))}
      </div>

      <DeleteInstructions deleteAll={deleteAll} />

      <ResetButton reset={resetValidator} />
    </div>
  );
}

export default App;
