import { useState } from 'react';
import { Link } from 'react-router-dom';

const FavoriteEpisodes = () => {
    const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);

    const toggleFavorite = (episode) => {
        const updatedFavorites = favorites.some(fav => fav.id === episode.id)
            ? favorites.filter(fav => fav.id !== episode.id)
            : [...favorites, episode];
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    if (favorites.length === 0) return <p>No favorite episodes yet!</p>;

    return (
        <div>
            <h2>Favorite Episodes</h2>
            <ul>
                {favorites.map(episode => (
                    <li key={episode.id}>
                        <Link to={`/show/${episode.showId}`}>{episode.title}</Link>
                        <button onClick={() => toggleFavorite(episode)}>Remove from Favorites</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FavoriteEpisodes;
