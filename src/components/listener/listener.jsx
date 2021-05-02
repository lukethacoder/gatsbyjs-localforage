import * as React from 'react';
import { useLocalForageObserver } from '../../hooks/useLocalForageObserver';
import { TEST_DB_KEYS } from '../../utils';
import { Card } from '../card';

export function Listener() {
  const [keyObserverValue, setKeyObserverValue] = React.useState('');
  const keyObserver = useLocalForageObserver(TEST_DB_KEYS[0]);

  React.useEffect(() => {
    console.log('keyObserver changed ', keyObserver);
    setKeyObserverValue(keyObserver);
  }, [keyObserver]);

  return (
    <Card>
      <p>
        this value sits within an observable component, listening to the <code>uno</code> key value.
      </p>
      <mark>{keyObserverValue}</mark>
    </Card>
  );
}
