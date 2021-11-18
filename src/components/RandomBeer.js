import axios from 'axios';
import { useState, useEffect } from 'react';

import React from 'react';

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(randomBeer);

  return (
    <div
      className="card w-100 d-flex align-items-center justify-content-center"
      style={{ width: '18rem' }}
    >
      <div className="d-flex align-items-center justify-content-center">
        <img
          className="card-img-top mt-3"
          src={randomBeer.image_url}
          alt="beer img"
          style={{ width: '100px', height: 'auto' }}
        />
      </div>

      <div className="card-body">
        <div className="d-flex d-row justify-content-between">
          <h2>{randomBeer.name}</h2>
          <p>{randomBeer.attenuation_level}</p>
        </div>
        <div className="d-flex d-row justify-content-between">
          <h2>{randomBeer.tagline}</h2>
          <p>{randomBeer.first_brewed}</p>
        </div>
        <p className="card-text">
            {randomBeer.description}
        </p>
        <p>
            {randomBeer.contributed_by}
        </p>
      </div>
    </div>
  );
}

export default RandomBeer;
