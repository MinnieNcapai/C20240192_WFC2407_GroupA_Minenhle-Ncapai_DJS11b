import { useEffect, useState } from 'react';
import { fetchPreviews } from '../api';
import GenreFilter from './GenreFilter';

const ShowPodcastList = () => {
    const [shows, setShows] = useState([]);  // Stores all shows
    const [filteredShows, setFilteredShows] = useState([]); // Stores filtered shows
    const [error, setError] = useState(null); // Error state for handling fetch errors
    const [genres, setGenres] = useState([]); // List of genres for filtering

    useEffect(() => {
        const getShows = async () => {
            try {
                const previews = await fetchPreviews();
                setShows(previews);
                setFilteredShows(previews);
                const uniqueGenres = [...new Set(previews.map(show => show.genre))]; // Extract unique genres
                setGenres(uniqueGenres); // Set genres once they are extracted
            } catch {
                setError("Loading failed. Please try again later.");
            }
        };

        getShows();
    }, []);

    const handleSelectGenre = (genreId) => {
        if (genreId) {
            setFilteredShows(shows.filter(show => show.genreId === genreId));
        } else {
            setFilteredShows(shows); // Reset to all shows
        }
    };

    return (
        <div>
            <GenreFilter genres={genres} onSelectGenre={handleSelectGenre} />
            {error ? (
                <p>{error}</p> // Show error message if fetching fails
            ) : (
                filteredShows.map(show => (
                    <div key={show.id} className="show-item">
                        <h2>{show.title}</h2>
                        <img src={show.image} alt={show.title} />
                    </div>
                ))
            )}
        </div>
    );
};

export default ShowPodcastList;
