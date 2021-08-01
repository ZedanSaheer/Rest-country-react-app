import React from 'react'
import './index.css'
import Countries from './components/Countries'
import Header from './components/Header'
import Filter from './components/Filter'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Country from './components/Country'

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Filter />
        <Countries />
      </Route>
      <Route path="/countries/:name" children={<Country />}>
      </Route>
    </Router>
  )
}

export default App
