import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'



const Countries = ({newCountries , countries, setCountries}) => {

    const fetchDataApi = async () => {
        const url = 'https://restcountries.com/v2/all';
        const response = await fetch(url);
        const countries = await response.json();
        setCountries(countries);
    }

    const removeCountry = (numericCode) => {
        const newCountry = countries.filter((country) => country.numericCode !== numericCode)
        setCountries(newCountry);
    }

    useEffect(() => {
        fetchDataApi()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            <section className="grid">
                {newCountries.map((country) => {
                    const { numericCode, name, population, region, capital, flags } = country

                    return (
                        <div key={numericCode} className="country">
                            <div className="image-container"  style={{backgroundImage: `url(${flags.png})`}}>
                            </div>
                            <div className="country-grid-text">
                                <h3>{name.common}</h3>
                                <h4>Population : <span>{population}</span></h4>
                                <h4>Region : <span>{region}</span></h4>
                                <h4>Capital : <span>{capital}</span></h4>
                                <div className="height"></div>
                                <div className="buttons">
                                    <Link to={`/countries/${name.common}`} className="btn link">Show More</Link>
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
