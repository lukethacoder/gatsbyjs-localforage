import * as React from 'react'
import { localForageContext } from '../../context'
import { Card } from '../card'

export function Keys() {
  const [keys, setKeys] = React.useState([])
  const localForage = React.useContext(localForageContext)

  async function getLocalForageKeys() {
    const _keys = await localForage.keys()

    console.log(`_keys `, _keys)
    setKeys(_keys)
  }

  return (
    <Card>
      <button onClick={getLocalForageKeys}>getKeys</button>
      {keys && keys.length > 0 && (
        <ul>
          {keys.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </Card>
  )
}
