import React from "react";
import searchIcon from "../Assets/search.png";
import starIcon from "../Assets/star.png";
import { Link } from "react-router-dom";

const NavbarTop = (props) => {
  return (
    <div className="navbar">
      <Link to="home">
        <img src={searchIcon} alt="search" style={{ width: "2em" }} />
      </Link>

      <div className="col">
        <input
          className="form-control"
          placeholder="Type to search"
          value={props.value}
          onChange={(e) => props.setSearchValue(e.target.value)}
        />
      </div>

      <Link to="favourite">
        <img src={starIcon} alt="star" style={{ width: "2em" }} />
      </Link>
    </div>
  );
};

export default NavbarTop;
