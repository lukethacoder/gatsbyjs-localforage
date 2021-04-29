import * as React from 'react';
import { localForageContext } from '../../context';

const testKeys = ['uno', 'dos', 'tres'];

export function Uno() {
  const [optionValue, setOptionValue] = React.useState('uno');
  const localForage = React.useContext(localForageContext);

  function handleOptionChange(e) {
    setOptionValue(e.target.value);
  }

  function handleInputChange(e) {
    console.log(`${optionValue}: ${e.target.value}`);
    localForage.setItem(optionValue, e.target.value);
  }

  return (
    <div>
      <select onChange={handleOptionChange}>
        {testKeys.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <input type="number" onChange={handleInputChange} />
    </div>
  );
}
