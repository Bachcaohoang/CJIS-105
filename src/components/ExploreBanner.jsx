function ExploreBanner({ movie }) {
  return (
    <div className="banner">
      <img src={movie.image} alt={movie.movieName} />
      <div className="banner-info">
        <h2>{movie.movieName}</h2>
        <p>{movie.description}</p>
      </div>
    </div>
  );
}

export default ExploreBanner;
