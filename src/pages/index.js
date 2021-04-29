import * as React from 'react';
import { Keys, Uno, Values } from '../components';
import '../style.css';

// markup
const IndexPage = () => {
  return (
    <main
      style={{
        color: '#232129',
        padding: 96,
        fontFamily: '-apple-system, Roboto, sans-serif, serif',
      }}
    >
      <title>GatsbyJS vs localForage</title>
      <p>gatsbyjs vs localforage.</p>
      <Keys />
      <Uno />
      <Values />
    </main>
  );
};

export default IndexPage;
