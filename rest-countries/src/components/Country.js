import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { TiArrowBack } from 'react-icons/ti'

const Country = () => {

    const [country, setCountry] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        const fetchDataApi = async () => {
            const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            const country = await response.json();
            console.log(country);
            setCountry(country)
        }

        fetchDataApi();
    }, [])

    return (
        <>
            <div className="country-page-nav"><Link to="/" className="btn nav"><TiArrowBack className="back-icon" /><span className="page-nav-text">Back home</span></Link></div>
            <div className="country-page" >

                {country.map((c) => {
                    const { numericCode, flag, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders } = c

                    return (
                        <div className="country-info" key={numericCode}>
                            <div className="flag"><img src={flag} alt={name} /></div>
                            <div className="country-text">
                                <h2>{name}</h2>
                                <div className="country-details">
                                    <div className="one">
                                        <h4>Native Name :<span>{nativeName}</span></h4>
                                        <h4>Population : <span>{population}</span></h4>
                                        <h4>Region :<span>{region}</span></h4>
                                        <h4>Sub Region :<span>{subregion}</span></h4>
                                        <h4>Capital :<span>{capital}</span></h4>
                                    </div>
                                    <div className="two">
                                        <h4> Top Level Domain :<span>{topLevelDomain}</span></h4>
                                        <h4>Currencies : <span>{currencies[0].name}</span></h4>
                                        <h4>Languages :<span>{languages[0].name}</span></h4>
                                    </div>
                                </div>
                                <div className="border">
                                    <h2>border :</h2>
                                    {borders.map((border) => {
                                        return (
                                            <ul key={border}>
                                                <li>{border}</li>
                                            </ul>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Country
