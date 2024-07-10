import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const character = store.singleCharacter;

  useEffect(() => {
    actions.getSingleCharacter(id);
  }, []);

  return (
<div className="container">
<div className="card mb-3 mt-4 card-detail" style={{ maxWidth: "1000px" }}>
  <div className="row g-0 ">
    <div class="col-md-4 ">
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        class="img-fluid rounded-end "
        alt="..."
      />
    </div>
    <div className="col-md-8">
      <div className="card-body ms-5">
        <h1 className="card-title ms-2 ">
          {character.name}
        </h1>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Birth year: {character.birth_year}
          </li>
          <li className="list-group-item">
            Eye color: {character.eye_color}
          </li>
          <li className="list-group-item">
            Gender: {character.gender}
          </li>
          <li className="list-group-item">
            Hair color: {character.hair_color}
          </li>
          <li className="list-group-item">
            Height: {character.height}
          </li>
          <li className="list-group-item">
            Skin color: {character.skin_color}
          </li>
          <li className="list-group-item">
            Mass: {character.mass}
          </li>
        </ul>

        <p className="card-text">
         
        </p>
      </div>
    </div>
  </div>
</div>



</div>
  );
};
