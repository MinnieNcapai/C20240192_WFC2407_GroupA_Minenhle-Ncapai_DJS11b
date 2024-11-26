import { useEffect, useState } from 'react';
import { fetchPreviews } from '../api';
import GenreFilter from './GenreFilter';

const ShowPodcastList = ({ genres }) => {
    const [shows, setShows] = useState([]);  // All shows
    const [filteredShows, setFilteredShows] = useState([]); // Filtered shows
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const getShows = async () => {
            try {
                const previews = await fetchPreviews();
                setShows(previews);
                setFilteredShows(previews);
            } catch (error) {
                console.error("Error fetching shows:", error);
            } finally {
                setLoading(false);
            }
        };
        getShows();
    }, []);

    const handleSelectGenre = (genreId) => {
        if (genreId) {
            setFilteredShows(shows.filter(show => show.genreIds.includes(parseInt(genreId))));
        } else {
            setFilteredShows(shows); // Reset to all shows
        }
    };

    return (
        <div>
            <GenreFilter genres={genres} onSelectGenre={handleSelectGenre} />
            {loading ? (
                <p>Loading shows...</p>
            ) : (
                <div className="show-list">
                    {filteredShows.map(show => (
                        <div key={show.id} className="show-item">
                            <h2>{show.title}</h2>
                            <img src={show.image} alt={show.title} />
                            <p>Genres: {show.genreIds.map(id => genres.find(genre => genre.id === id)?.title).join(', ')}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ShowPodcastList;
