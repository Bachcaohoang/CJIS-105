export default function MovieList({ movies, onSelect }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {movies.slice(0, 6).map((m) => (
        <li
          key={m.id}
          onClick={() => onSelect(m)}
          style={{ cursor: "pointer", margin: "8px 0", padding: "6px", background: "#f4f4f4" }}
        >
          {m.title}
        </li>
      ))}
    </ul>
  );
}
