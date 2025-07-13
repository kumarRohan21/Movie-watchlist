import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual IMDb API key
    fetch(`https://www.omdbapi.com/?s=star&apikey=1fbb927e&type=movie`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        } else {
          console.error("No movies found:", data);
        }
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  const addToWatchlist = (movie) => {
    if (!watchlist.find((m) => m.imdbID === movie.imdbID)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  return (
    <div
      style={{
        background: "black",
        color: "blue",
        minHeight: "100vh",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: "30px" }}>🎬 Movie Watchlist</h1>

      {watchlist.length > 0 && (
        <div>
          <h2>Your Watchlist</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            {watchlist.map((movie) => (
              <div
                key={movie.imdbID}
                style={{
                  width: "150px",
                  border: "1px solid #555",
                  padding: "10px",
                  background: "#111",
                }}
              >
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <h4 style={{ fontSize: "14px", marginTop: "10px" }}>
                  {movie.Title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      )}

      <h2>Movie Suggestions</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            style={{
              width: "150px",
              border: "1px solid #555",
              padding: "10px",
              background: "#111",
              position: "relative",
            }}
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <h4 style={{ fontSize: "14px", marginTop: "10px" }}>
              {movie.Title}
            </h4>
            <button
              onClick={() => addToWatchlist(movie)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "#0f0",
                border: "none",
                borderRadius: "50%",
                width: "24px",
                height: "24px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              title="Add to Watchlist"
            >
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
