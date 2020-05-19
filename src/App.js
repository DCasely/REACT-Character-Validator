import React, { useState } from 'react';
import Header from './Header/Header';
import CharInput from './CharInput/CharInput';
import ValidateLength from './ValidateLength/ValidateLength';
import CharComponent from './CharComponent/CharComponent';
import DeleteInstructions from './DeleteInstructions/DeleteInstructions';
import './App.css';

function App() {
  const [characterList, setCharacterList] = useState([
    'V',
    'a',
    'l',
    'i',
    'd',
    'a',
    't',
    'o',
    'r',
  ]);

  const [count, setCount] = useState(characterList.length);

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
  } else if (count > 10) {
    validateMessage = 'Must Have Less Than 10 Characters';
  }

  return (
    <div>
      <Header />

      <CharInput getInput={countLetters} characters={characterList.join('')} />

      <ValidateLength
        validate={validateMessage ? validateMessage : 'ENTER YOUR CHARACTERS'}
      />

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

      <DeleteInstructions />
    </div>
  );
}

export default App;
