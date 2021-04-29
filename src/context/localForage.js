import * as React from 'react';
import localforage from 'localforage';

localforage.config({
  driver: [localforage.WEBSQL, localforage.INDEXEDDB, localforage.LOCALSTORAGE],
  name: 'gatsbyjs-vs-localforage',
});

export const localForageContext = React.createContext(localforage);
