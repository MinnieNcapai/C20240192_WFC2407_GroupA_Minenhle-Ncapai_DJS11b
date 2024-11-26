import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowPodcastList from './Components/ShowPodcastList'; // Component for displaying the list of podcasts
import FavoriteEpisodes from './Components/FavoriteEpisodes'; // Component for displaying favorite episodes
import GenreFilter from './Components/GenreFilter'; // Component for filtering shows by genre
import { fetchGenreById } from './api'; // Fetch function for genres

const App = () => {
    const [genres, setGenres] = useState([]); // State to store genres
    const [loadingGenres, setLoadingGenres] = useState(true); // Loading state for genres

    // Fetch genres on mount
    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const genreData = await fetchGenreById(''); // Fetch all genres
                setGenres(genreData);
            } catch (error) {
                console.error("Error fetching genres:", error);
            } finally {
                setLoadingGenres(false);
            }
        };
        fetchGenres();
    }, []);

    return (
        <Router>
            <div className="app-container">
                <h1 className="app-title">Podcast App</h1>
                
                {/* Genre Filter */}
                {loadingGenres ? (
                    <p>Loading genres...</p>
                ) : (
                    <GenreFilter genres={genres} onSelectGenre={() => {}} />
                )}

                {/* Routes */}
                <Switch>
                    <Route path="/" exact>
                        <ShowPodcastList genres={genres} />
                    </Route>
                    <Route path="/favorites" component={FavoriteEpisodes} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
