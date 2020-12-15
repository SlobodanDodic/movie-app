import React from "react";

const Home = (props) => {
  return (
    <>
      <h1 className="text-light">Search for movies</h1>
      <div className="row row-cols-1 row-cols-md-3">
        {props.movies.map((movie) => (
          <div key={movie.imdbID} className="col">
            <div className="card">
              <img
                className="card-img-top p-2"
                src={movie.Poster}
                alt="poster"
              />
              <div className="card-body">
                <h6 className="card-title">{movie.Title}</h6>
                <p>{movie.Year}</p>
                <div
                  className="card-footer"
                  onClick={() => props.handleFavouritesClick(movie)}
                >
                  <span className="fav-span">Add to Favourites</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;