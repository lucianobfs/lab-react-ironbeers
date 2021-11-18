import axios from "axios";
import { useState, useEffect } from "react";

import React from "react";
import { Link, Route, Routes } from "react-router-dom";

function AllBeers() {

    const [beer, setBeer] = useState([])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
            setBeer([...response.data])
            
        }).catch((err) => {
            console.log(err)
        })
    }, [])
        
    console.log(beer)

    return (
        <div>
            {beer.map((item) => {
               return (
                <div className="d-flex d-row mt-5 mb-5 ms-1 me-1 h-100" key={item.name}>
                    
                    {console.log(item.name)}
                    <Link to={`/${item.name}`} className="text-decoration-none text-dark">
                        <img src={item.image_url} alt={item.name} style={{width: "10%", height: "auto"}}/>
                    

                        <div className="d-flex d-column w-5">
                            <h2>{item.name}</h2>

                            <p>{item.tagline}</p>

                            <p>{item.contributed_by}</p>
                        </div>


                    </Link>

                </div>
               )
            })}
        </div>
    )
   
}

export default AllBeers