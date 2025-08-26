export default function Banner({ movie }) {
  if (!movie) return <div>Select a movie…</div>
  return (
    <div style={{border: "1px solid gray", padding: "10px"}}>
      <h2>{movie.movieName}</h2>
      <img src={movie.image} alt={movie.movieName} width="400" />
      <p>{movie.description}</p>
      <p>Episode: {movie.episode}</p>
    </div>
  )
}