export default function Banner({ movie }) {
  if (!movie) return null
  return (
    <div className="banner">
      <img src={movie.image} alt={movie.movieName} />
      <div className="overlay">
        <h2>{movie.movieName}</h2>
        <p>{movie.description}</p>
        <p>Episodes: {movie.episode}</p>
      </div>
    </div>
  )
}