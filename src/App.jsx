import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Attack on Titan",
    type: "Anime",
    language: "Japanese",
    subtitle: "Arabic",
    genre: "Action",
    rating: "9.1",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    title: "Breaking Bad",
    type: "TV Show",
    language: "English",
    subtitle: "Arabic",
    genre: "Drama",
    rating: "9.5",
    url: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 3,
    title: "Interstellar",
    type: "Movie",
    language: "English",
    subtitle: "Arabic",
    genre: "Sci-Fi",
    rating: "8.6",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  }
];

export default function App() {
  const [search, setSearch] = useState("");
  const filtered = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">🎬 SHADE Streaming Platform</h1>
      <input
        className="w-full max-w-md mx-auto block p-2 rounded bg-gray-800 text-white"
        placeholder="Search for a movie, show, or anime..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map(item => (
          <div key={item.id} className="bg-gray-900 p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p>Type: {item.type}</p>
            <p>Language: {item.language}</p>
            <p>Subtitle: {item.subtitle}</p>
            <p>Genre: {item.genre}</p>
            <p>Rating: ⭐ {item.rating}</p>
            <video controls className="w-full mt-2 rounded">
              <source src={item.url} type="video/mp4" />
              Your browser does not support video.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}