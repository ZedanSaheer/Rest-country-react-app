import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const Filter = () => {
    return (
        <>
            <div className="filter-wrapper">
                <div className="search">
                    <AiOutlineSearch />
                    <div className="space"></div>
                    <div className="space"></div>
                    <input type="search" name="" className="search-input" placeholder="Search for a country..." />
                </div>
                <div className="filter">
                    <select name="select" className="select">
                        <option value="Defautl" hidden >Filter by region</option>
                        <option value="Asia">Asia</option>
                        <option value="Africa">Africa</option>
                        <option value="Europe">Europe</option>
                        <option value="Ocenia">Oceania</option>
                        <option value="America">America</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Filter
