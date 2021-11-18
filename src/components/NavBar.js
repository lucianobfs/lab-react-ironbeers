import React from "react";

import { Link, Route, Routes } from "react-router-dom";

import logo from "../assets/botao-home.png"


function NavBar() {

    return (
        <nav className="navbar navbar-light d-flex align-items-center justify-content-center" style={{backgroundColor: "#3DC4FC"}}>
        <Link className="navbar-brand" to="/">
          <img src={logo} style={{width: "30", height: "30"}} alt="logo" />
        </Link>
      </nav>
    )

}


export default NavBar