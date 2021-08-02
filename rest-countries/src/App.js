import React , {useState} from 'react'
import './index.css'
import Countries from './components/Countries'
import Header from './components/Header'
import Filter from './components/Filter'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Country from './components/Country'

const App = () => {

  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([])
  const [button, setButton] = useState(false)

  const newSearchCountry = countries.filter((country) => (country.name.toLowerCase().includes(search.toLowerCase())))

  const resetCountries = async () => {
    const url = 'https://restcountries.eu/rest/v2/all'
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries)
}

  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Filter handleChange = {(e)=> {
        setSearch(e.target.value);
        setCountries(newSearchCountry);
        setButton(true)
  }} button = {button} reset={resetCountries}/>
        <Countries countries={countries} setCountries
        ={setCountries} />
      </Route>
      <Route path="/countries/:name" children={<Country />}>
      </Route>
    </Router>
  )
}

export default App
