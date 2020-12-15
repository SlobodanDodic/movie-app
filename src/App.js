import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import NavbarTop from "./components/NavbarTop";
import Home from "./components/Home";
import Favourite from "./components/Favourite";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=946cc8c5`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem("movie-fav"));
    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("movie-fav", JSON.stringify(items));
  };

  const AddFavouriteMovie = (movie) => {
    const newFavouritesList = [...favourites, movie];
    setFavourites(newFavouritesList);
    saveToLocalStorage(newFavouritesList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouritesList = favourites.filter(
      (favourites) => favourites.imdbID !== movie.imdbID
    );
    setFavourites(newFavouritesList);
    saveToLocalStorage(newFavouritesList);
  };

  return (
    <div className="App">
      <Router basename="movie-app">
        <NavbarTop searchValue={searchValue} setSearchValue={setSearchValue} />

        <Route
          path="/"
          exact
          component={() => (
            <Home movies={movies} handleFavouritesClick={AddFavouriteMovie} />
          )}
        />
        <Route
          path="/favourite"
          component={() => (
            <Favourite
              movies={favourites}
              handleFavouritesClick={removeFavouriteMovie}
            />
          )}
        />
      </Router>
    </div>
  );
};

export default App;
