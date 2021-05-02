import * as React from 'react';
import { localForageContext } from '../../context';
import { TEST_DB_KEYS } from '../../utils';
import { Card } from '../card';

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
    <Card>
      <p style={{ margin: '0px 0px 8px' }}>set values on keys</p>
      <div style={{ display: 'flex', alignItems: 'stretch' }}>
        <select onChange={handleOptionChange}>
          {TEST_DB_KEYS.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <input type="text" onChange={handleInputChange} />
      </div>
    </Card>
  );
}
