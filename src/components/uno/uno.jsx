import * as React from 'react';
import { localForageContext } from '../../context';
import { TEST_DB_KEYS } from '../../utils';
import { Card } from '../card';

export function Uno() {
  const localForage = React.useContext(localForageContext);
  const [optionValue, setOptionValue] = React.useState('uno');
  const [localInputValue, setLocalInputValue] = React.useState('');

  React.useEffect(() => {
    getExistingValueByKey(optionValue);
  }, []);

  async function handleOptionChange(e) {
    setOptionValue(e.target.value);
    getExistingValueByKey(e.target.value);
  }

  function handleInputChange(e) {
    setLocalInputValue(e.target.value);
    console.log(`${optionValue}: ${e.target.value}`);
    localForage.setItem(optionValue, e.target.value);
  }

  async function getExistingValueByKey(key) {
    // get existing localForage value (if one exists)
    const existingValue = await localForage.getItem(key);
    setLocalInputValue(existingValue ? existingValue : '');
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
        <input type="text" value={localInputValue} onChange={handleInputChange} />
      </div>
    </Card>
  );
}
