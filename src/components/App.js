import React from 'react';
import '../components/App';
import axios from "axios";


import allBeersImg from "../assets/beers.png"

import randomBeerImg from "../assets/random-beer.png"

import newBeerImg from "../assets/new-beer.png"


import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from "react-router-dom";

import InitialPage from './BeersElements';

import NavBar from './NavBar';
import BeersElements from './BeersElements';
import AllBeers from './AllBeers';

import RandomBeer from './RandomBeer';

import FormBeer from './FormBeer';

import Home from './Home';
import SingleBeer from './SingleBeer';








function App() {


 



  return (
    <div >
      <NavBar />
      
    

      <Routes>
        <Route path="allbeers" element={<AllBeers />}/>
        <Route path="randombeer" element={<RandomBeer />}/>
        <Route path="newbeer" element={<FormBeer />}/>
        <Route path="/" element={<Home />} />
        <Route path=":beer" element={<SingleBeer />} />
        
      </Routes>

    

      {/* <AllBeers /> */}

      {/* <RandomBeer /> */}

      {/* <FormBeer /> */}

    </div>
  );
}

export default App;
