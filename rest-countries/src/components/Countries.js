import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const url = 'https://restcountries.eu/rest/v2/all'

const Countries = ({countries, setCountries}) => {

    const fetchDataApi = async () => {
        const response = await fetch(url);
        const countries = await response.json();
        setCountries(countries)
    }

    const removeCountry = (numericCode) => {
        const newCountry = countries.filter((country) => country.numericCode !== numericCode)
        setCountries(newCountry)
    }

    useEffect(() => {
        fetchDataApi()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="amount"><h6>Showing {countries.length} {countries.length < 2 ?"country" : "countries"} around the globe!</h6></div>
            <section className="grid">
                {countries.map((country) => {
                    const { numericCode, name, population, region, capital, flag } = country

                    return (
                        <div key={numericCode} className="country">
                            <div className="image-container"  style={{backgroundImage: `url(${flag})`}}>
                            </div>
                            <div className="country-grid-text">
                                <h3>{name}</h3>
                                <h4>Population : <span>{population}</span></h4>
                                <h4>Region : <span>{region}</span></h4>
                                <h4>Capital : <span>{capital}</span></h4>
                                <div className="height"></div>
                                <div className="buttons">
                                    <Link to={`/countries/${name}`} className="btn link">Show More</Link>
                                    <div className="height"></div>
                                    <button className="btn" onClick={() => {
                                        removeCountry(numericCode)
                                    }}>Remove Country</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default Countries
