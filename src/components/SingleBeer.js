import { Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

let foundBeer

function SingleBeer() {
  const  beer  = useParams();
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);



  const [beersCopy, setBeersCopy] = useState([])
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${beer}`)
      .then((response) => {
        setBeers([...response.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });

      
  }, [beer]);

  useEffect(() => {
    if (beers.length > 0) {
        console.log('rodou')
        foundBeer = beers.find((item) => {
            return item.name === beer.beer
        })
    }
  }, [beers])


  console.log(foundBeer)

  
  return (
    <div>
      {loading ? (
        <div
          className="text-center d-flex justify-content-center align-items-end"
          style={{ height: '300px' }}
        >
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        <div
          className="card w-100 d-flex align-items-center justify-content-center"
          style={{ width: '18rem' }}
        >
          <div className="d-flex align-items-center justify-content-center">
            <img
              className="card-img-top mt-3"
              src={foundBeer.image_url}
              alt="beer img"
              style={{ width: '100px', height: 'auto' }}
            />
          </div>
          <div className="card-body">
            <div className="d-flex d-row justify-content-between">
              <h2 className="w-75">{foundBeer.name}</h2>
              <p className="h2 text-secondary">{foundBeer.attenuation_level}</p>
            </div>
            <div className="d-flex d-row justify-content-between">
              <h5 className="text-secondary w-75">{foundBeer.tagline}</h5>
              <p>
                <strong>{foundBeer.first_brewed}</strong>
              </p>
            </div>
            <p className="card-text mt-3">
             {foundBeer.description}
            </p>
            <small className="text-muted">{foundBeer.contributed_by}</small>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleBeer;
