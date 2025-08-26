export default function MovieCard({ movie, onSelect }) {
  return (
    <div className="card" onClick={() => onSelect(movie)}>
      <img src={movie.image} alt={movie.movieName} />
      <h3>{movie.movieName}</h3>
      <p>Episode {movie.episode}</p>
    </div>
  )
}