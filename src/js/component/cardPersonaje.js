import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import StarWars from "../../img/star-wars-logo-black-and-white.png";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


export const CardPersonaje = (props) => {
  const { store, actions } = useContext(Context);

  const isFavorite = store.favorites.includes(props.name);

  return (
    <div className="card mx-1 bg-dark" style={{ width: "18rem" }}>
      <img src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`}
 className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-white">{props.name}</h5>
        <p className="card-text text-white">Hair Color: {props.hair_color}</p>
        <p className="card-text text-white">Eye Color: {props.eye_color}</p>
        <p className="card-text text-white">Gender: {props.gender}</p>
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
          <Link to={`/single/${props.id}`}>
            <button className="btn btn-secondary">Detailed View</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
