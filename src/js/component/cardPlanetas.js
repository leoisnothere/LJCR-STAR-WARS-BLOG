import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import StarWars from "../../img/star-wars-logo-black-and-white.png";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const CardPlanetas = (props) => {
  const { store, actions } = useContext(Context);

  const isFavorite = store.favorites.includes(props.name);

  return (
    <div className="card mx-1 bg-dark" style={{ width: "18rem" }}>
      <img 
      src={`https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`} 
      onError={(e) => {
        console.log(e);
        e.target.src =
          "https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131019121937";
      }}
      className="card-img-top" 
      alt="..." />
      <div className="card-body">
        <h5 className="card-title text-white">{props.name}</h5>
        <p className="card-text text-white">Population: {props.population}</p>
        <p className="card-text text-white">Terrain: {props.terrain}</p>
        <div style={{ marginBottom: "10px" }}>
          <button
            onClick={() => actions.favoriteCheck(props.name)}
            className="btn btn-secondary"
            style={{ marginRight: "10px", color: isFavorite ? "red" : "white" }}
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>

        </div>
        <div>
          <Link to={`/singlePlanet/${props.id}`}>
            <button className="btn btn-secondary">Detailed View</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
