import React from 'react';
import '../components/App';
import axios from "axios";


import BeersElements from './BeersElements';

import allBeersImg from "../assets/beers.png"

import randomBeerImg from "../assets/random-beer.png"

import newBeerImg from "../assets/new-beer.png"


function Home(props) {

    return (
        <div>
            <BeersElements link="/allbeers" img={allBeersImg} title="All Beers" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue, nibh quis pellentesque aliquam, nibh ante fermentum mi, non vestibulum erat augue eget sapien."/>
            <BeersElements link="/randombeer" img={randomBeerImg} title="Random Beer" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue, nibh quis pellentesque aliquam, nibh ante fermentum mi, non vestibulum erat augue eget sapien."/>
            <BeersElements link="/newbeer" img={newBeerImg} title="New Beer" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue, nibh quis pellentesque aliquam, nibh ante fermentum mi, non vestibulum erat augue eget sapien."/>
        </div>
    )

}

export default Home