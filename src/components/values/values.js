import * as React from 'react';
import { localForageContext } from '../../context';

export function Values() {
  const [keyValuePairs, setKeyValuePairs] = React.useState([]);
  const localForage = React.useContext(localForageContext);

  async function getLocalForageKeys() {
    // const _keyValuePairs = await localForage.iterate((value, key, iterationNumber) => ({ key, value }));
    const _keyValuePairs = [];
    await localForage.iterate(function(value, key, iterationNumber) {
      _keyValuePairs.push({ key, value });
    });
    console.log(`_keyValuePairs `, _keyValuePairs);
    setKeyValuePairs(_keyValuePairs);
  }

  return (
    <div>
      <button onClick={getLocalForageKeys}>getKeyValuePairs</button>
      <ul>
        {keyValuePairs.map((item) => (
          <li key={item.key}>
            {item.key}: {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
