import { createContext } from 'react'
import isBrowser from 'is-in-browser'
import localforage from 'localforage'
import { extendPrototype } from 'localforage-observable'

console.log('isBrowser ', isBrowser)

if (isBrowser) {
  localforage.config({
    driver: [
      localforage.WEBSQL,
      localforage.INDEXEDDB,
      localforage.LOCALSTORAGE,
    ],
    name: 'gatsbyjs-vs-localforage',
  })
}

const localForage = extendPrototype(localforage)
export const localForageContext = createContext(isBrowser && localForage)
