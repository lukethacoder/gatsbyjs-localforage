import React from 'react'
import { Clear, Keys, Listener, Uno, Values } from '../components'
import '../style.css'

// markup
const IndexPage = () => {
  return (
    <main>
      <title>GatsbyJS vs localForage</title>
      <h1>gatsbyjs vs localforage.</h1>
      <h2>
        example usage of{' '}
        <a href='https://localforage.github.io/localForage/' target='_blank'>
          localForage
        </a>{' '}
        within a{' '}
        <a href='https://www.gatsbyjs.com/' target='_blank'>
          GatsbyJS
        </a>{' '}
        site (feat. observables)
      </h2>
      <Uno />
      <Keys />
      <Values />
      <Clear />
      <Listener />
    </main>
  )
}

export default IndexPage
