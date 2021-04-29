import * as React from 'react';
import { localForageContext } from '../../context';

export function Keys() {
  const localForage = React.useContext(localForageContext);
  async function getLocalForageKeys() {
    const keys = await localForage.keys();

    console.log(`keys `, keys);
  }

  return <button onClick={getLocalForageKeys}>getKeys</button>;
}
