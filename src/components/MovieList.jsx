import MovieCard from './MovieCard';

function MovieList({ movies, onSelect }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onClick={() => onSelect(movie)} />
      ))}
    </div>
  );
}

export default MovieList;
