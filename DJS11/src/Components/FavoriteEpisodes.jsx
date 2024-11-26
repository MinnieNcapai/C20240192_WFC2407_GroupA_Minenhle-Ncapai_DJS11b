import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes

function FavoriteEpisodes({ favorites, toggleFavorite }) {
    if (favorites.length === 0) {
        return <div>No favorite shows yet!</div>;
    }

    return (
        <div>
            <h2>Favorite Shows</h2>
            <ul>
                {favorites.map(show => (
                    <li key={show.id}>
                        <Link to={`/show/${show.id}`}>
                            {show.title}
                        </Link>
                        <button onClick={() => toggleFavorite(show)}>Remove from Favorites</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// PropTypes validation
FavoriteEpisodes.propTypes = {
    favorites: PropTypes.array.isRequired,  // Expecting an array for favorites
    toggleFavorite: PropTypes.func.isRequired, // Expecting a function for toggleFavorite
};

export default FavoriteEpisodes;
