import * as React from 'react';
import localforage from 'localforage';
import { extendPrototype } from 'localforage-observable';

localforage.config({
  driver: [localforage.WEBSQL, localforage.INDEXEDDB, localforage.LOCALSTORAGE],
  name: 'gatsbyjs-vs-localforage',
});

const localForage = extendPrototype(localforage);
export const localForageContext = React.createContext(localForage);
