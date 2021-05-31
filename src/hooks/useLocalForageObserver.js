import React, { useEffect, useContext, useState } from 'react'
import Observable from 'zen-observable'
import isBrowser from 'is-in-browser'
import { localForageContext } from '../context'

export function useLocalForageObserver(keyToObserve) {
  const localForage = useContext(localForageContext)
  const [keyValue, setKeyValue] = useState(null)

  useEffect(() => {
    if (isBrowser) {
      localForage.ready(() => {
        localForage.newObservable.factory = function(subscribeFn) {
          return new Observable(subscribeFn)
        }

        console.log(`Using "${localForage.driver()}" as the localForage driver`)
        ;(async () => {
          const initialValue = await localForage.getItem(keyToObserve)
          setKeyValue(initialValue)
        })()

        const observable = localForage.newObservable({
          key: keyToObserve,
        })
        const subscription = observable.subscribe({
          next: (args) => {
            setKeyValue(args.newValue)
          },
          error: function(err) {
            console.log('Found an error!', err)
          },
          complete: function() {
            console.log('Observable destroyed!')
          },
        })

        return subscription
      })
    }
  }, [])

  return keyValue
}
