"use client";
import React, { useState } from 'react'
import { SearchManuFacturer } from './';


const SearchBar = () => {
    const [manufacturor, setManufacturor] = useState("")
    const handleSubmit = () => {

    }

    return (
        <form className='searchbar' onSubmit={handleSubmit}>
            <div className='searchbar__item'>
                <SearchManuFacturer
                    manufacturor={manufacturor}
                    setManufacturor={setManufacturor}
                />
            </div>
        </form>
    )
}

export default SearchBar