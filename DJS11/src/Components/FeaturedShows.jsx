import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function FeaturedShows() {
  const [shows, setShows] = useState([]);
  const [favorites, setFavorites] = useState([]); // State to store favorite shows

  useEffect(() => {
    fetch('https://podcast-api.netlify.app')
      .then(response => response.json())
      .then(data => setShows(data));
  }, []);

  const featuredShows = shows.slice(0, 3); // Get the first three shows as featured

  const handleToggleFavorite = (show) => {
    if (favorites.includes(show)) {
      setFavorites(favorites.filter(fav => fav.id !== show.id));
    } else {
      setFavorites([...favorites, show]);
    }
  };

  return (
    <div>
      <h2>Featured Shows</h2>
      {featuredShows.map(show => (
        <div key={show.id}>
          <Link to={`/show/${show.id}`}>
            <h3>{show.title}</h3>
            <img src={show.image} alt={show.title} />
            <p>{show.description}</p>
          </Link>
          <button onClick={() => handleToggleFavorite(show)}>
            {favorites.includes(show) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      ))}

      <h2>All Shows</h2>
      {shows.map(show => (
        <div key={show.id}>
          <Link to={`/show/${show.id}`}>
            <h3>{show.title}</h3>
            <img src={show.image} alt={show.title} />
            <p>{show.description}</p>
          </Link>
          <button onClick={() => handleToggleFavorite(show)}>
            {favorites.includes(show) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default FeaturedShows;
