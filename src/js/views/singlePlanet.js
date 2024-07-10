import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const planet = store.singlePlanet;

  useEffect(() => {
    actions.getSinglePlanet(id);
  }, []);

  return (
    <div className="container">
<div className="card mb-3 mt-4 card-detail" style={{ maxWidth: "1200px" }}>
        <div className="row g-0 ">
          <div class="col-md-4">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
              onError={(e) => {
                console.log(e);
                e.target.src =
                  "https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131019121937";
              }}
              class="img-fluid rounded-end align-items-center"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body ms-5">
              <h1 className="card-title ms-2">
                {planet.name}
              </h1>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                Rotation Period: {planet.rotation_period}
                </li>
                <li className="list-group-item">
                Orbital period: {planet.orbital_period}
                </li>
                <li className="list-group-item">
                Diameter: {planet.diameter}
                </li>
                <li className="list-group-item">
                Climate: {planet.climate}
                </li>
                <li className="list-group-item">
                Gravity: {planet.gravity}
                </li>
                <li className="list-group-item">
                Terrain: {planet.terrain}
                </li>
                <li className="list-group-item">
                Surface water: {planet.surface_water}
                </li>
                <li className="list-group-item">
                Population: {planet.population}
                </li>
              </ul>
          </div>
          </div>
          </div>
          </div>
    </div>
  );
};
