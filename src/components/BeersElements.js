import { Link, Route, Routes } from "react-router-dom";
import React from "react";



function BeersElements(props) {

    return (

        <div>

        <Link to={props.link} className="text-decoration-none text-dark">

            <img src={props.img} style={{width: "100%", height: "auto"}} />
            
                

            <div>
                <h3 >{props.title}</h3>
                <p >{props.text}</p>
            </div>

        </Link>

        </div>
    )

}


export default BeersElements