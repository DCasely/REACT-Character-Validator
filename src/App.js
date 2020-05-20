import React, { useState } from 'react';
import Header from './Header/Header';
import Input from './Input/Input';
import ValidateMessage from './ValidateMessage/ValidateMessage';
import Output from './Output/Output';
import DeleteInstructions from './DeleteInstructions/DeleteInstructions';
import ResetButton from './ResetButton/ResetButton';

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

  // VALIDATOR RULES & MESSAGE
  const min = 5;
  const max = 15;
  let validateMessage = '';

  if (count < min)
    validateMessage = `You Only Have ${count} Characters, You Need At Least ${min}`;

  if (count >= min && count <= max) validateMessage = '';

  if (count > max)
    validateMessage = `You Have ${count} Characters, You Need Less Than ${max}.`;

  return (
    <div>
      <Header />

      <Input getInput={countLetters} characters={characterList.join('')} />

      <ValidateMessage validate={validateMessage} />

      <div className="CharComp-Container">
        {characterList.map((character, index) => (
          <Output
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
