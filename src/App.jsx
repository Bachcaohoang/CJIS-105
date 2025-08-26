import { useState } from "react"
import { MOVIES } from "./data/movies"
import MovieCard from "./components/MovieCard"
import Banner from "./components/Banner"
import "./styles.css"

export default function App() {
  const [selected, setSelected] = useState(MOVIES[0])

  return (
    <div className="container">
      <header>
        <h1>Anonime</h1>
        <nav>
          <a href="#">Explore</a>
          <a href="#">New Release</a>
        </nav>
      </header>

      <section className="explore">
        <h2>Explore</h2>
        <p>What do you want to watch today?</p>
        <Banner movie={selected} />
      </section>

      <section>
        <h2>New Release</h2>
        <div className="grid">
          {MOVIES.map(m => (
            <MovieCard key={m.id} movie={m} onSelect={setSelected} />
          ))}
        </div>
      </section>
    </div>
  )
}