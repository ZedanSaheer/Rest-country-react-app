import React, { useEffect, useState } from 'react'
import './index.css'
import Countries from './components/Countries'
import Header from './components/Header'
import Filter from './components/Filter'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Country from './components/Country'

const App = () => {
  const [select, setSelect] = useState("")
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([])
  const [button, setButton] = useState(false)

  const newSearchCountry = countries.filter((country) => (country.name.toLowerCase().includes(search.toLowerCase())))


  const newSelectCountry = countries.filter((country) => (country.region.toLowerCase().includes(select.toLowerCase())))


  const searchHandle = (e) => {
    setSearch(e.target.value);
    setCountries(newSearchCountry);
    setButton(true)
  }

  const selectHandle = (e) => {
    setSelect(e.target.value);
    setButton(true)
  }
  
  useEffect(() => {
    setCountries(newSelectCountry)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [select])

  const resetCountries = async () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload(true);
  }

  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Filter handleChange={searchHandle} button={button} reset={resetCountries}
          handleSelectChange={selectHandle}
        />
        <Countries countries={countries} setCountries
          ={setCountries} />
      </Route>
      <Route path="/countries/:name" children={<Country button={button} setButton={setButton} />}>
      </Route>
    </Router>
  )
}

export default App
