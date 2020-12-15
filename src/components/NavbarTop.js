import React from "react";
import searchIcon from "../Assets/search.png";
import starIcon from "../Assets/star.png";

const NavbarTop = (props) => {
  return (
    <div className="navbar">
      <a className="col-2" target="_blank" rel="noopener noreferrer" href="/">
        <img src={searchIcon} alt="search" style={{ width: "2em" }} />
      </a>

      <div className="col">
        <input
          className="form-control"
          placeholder="Type to search"
          value={props.value}
          onChange={(e) => props.setSearchValue(e.target.value)}
        />
      </div>

      <a
        className="col-2"
        target="_blank"
        rel="noopener noreferrer"
        href="/favourite"
      >
        <img src={starIcon} alt="star" style={{ width: "2em" }} />
      </a>
    </div>
  );
};

export default NavbarTop;
