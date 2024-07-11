import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-dark mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1 text-white">Star Wars</span>
      </Link>
      <div className="ml-auto">
        <div className="dropdown dropleft"> 
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      Favorites {store.favorites?.length}
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <ul>
      {store.favorites?.map((favorite, index) => (
  <li>
    <a>{favorite}<br/></a>
    <button
  onClick={() => actions.removeFavorite(favorite)}
  className="btn btn-secondary"
>
  <FontAwesomeIcon icon={faTrash} />
</button>
  </li>
))}
        </ul>
      </Dropdown.Menu>
    </Dropdown>
        </div>
      </div>
    </nav>
  );
};