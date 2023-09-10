import React from 'react'

import Apt1 from '../../assets/Solar-1.jpg'
import Apt2 from '../../assets/wind.jpg'
import Apt3 from '../../assets/hydroele.jpg'
import Apt5 from '../../assets/geoo.jpg'

import './Best.css'

const Best = () => {
    return (
        <div className='best'>
            <h1>Renewable energies</h1>
            
            <div className='container'>
                <img src={Apt1} alt='' />
                <img src={Apt2} alt='' />
                <img src={Apt3} alt='' />
                <img src={Apt5} alt='' />
            
            </div>
            
        </div>
    )
}

export default Best
