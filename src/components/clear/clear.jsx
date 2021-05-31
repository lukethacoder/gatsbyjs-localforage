import * as React from 'react'
import { localForageContext } from '../../context'
import { Card } from '../card'

export function Clear() {
  const localForage = React.useContext(localForageContext)

  async function clearLocalForage() {
    console.log(`Clearing all localForage key/value pairs`)
    localForage.clear()
  }

  return (
    <Card>
      <button onClick={clearLocalForage}>Clear all data</button>
    </Card>
  )
}
