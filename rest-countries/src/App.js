import React from 'react'
import './index.css'
import Countries from './components/Countries'
import Header from './components/Header'
import Filter from './components/Filter'

const App = () => {
  return (
    <>
      <Header />
      <Filter />
      <Countries />
    </>
  )
}

export default App
