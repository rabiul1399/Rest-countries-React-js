import React from 'react';
import './Country.css'
const Country = (Props) => {
    // console.log(Props)
    const {name,area,region,flags} = Props.country
    return (
        <div className='country bg-success text-black'>
  <div>
           <h3>Country: {name.common}</h3>
           <img src={flags.png} alt="" /></div>
           <h4>Region: {region}</h4>
            <h4> Area: {area}</h4>        
               
        </div>
    );
};

export default Country;