import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <h1>Energy Hub</h1>
                <p className='search-text'> Search about the contractors </p>
                <form className='search'>

                    <div>
                        <input type='text' placeholder='Enter name...' />
                    </div>
                    <div className='radio'> 
                       
                        <button type='submit'><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
