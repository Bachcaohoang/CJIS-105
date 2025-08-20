import { useState } from 'react';
import './index.css';
import { movies } from './data/movies';
import ExploreBanner from './components/ExploreBanner';
import MovieList from './components/MovieList';
import Header from './components/Header';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <h2>Explore</h2>
        <p className="sub">What are you gonna watch today ?</p>
        <ExploreBanner movie={selectedMovie} />
        <h3 className="section-title">New Release</h3>
        <MovieList movies={movies} onSelect={setSelectedMovie} />
      </div>
    </div>
  );
}

export default App;
