import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowPodcastList from './Components/ShowPodcastList'; // Component for displaying the list of podcasts
import FavoriteEpisodes from './Components/FavoriteEpisodes'; // Component for displaying favorite episodes
import FeaturedShows from './Components/FeaturedShows'; // Component for displaying recommended/featured shows
import GenreFilter from './Components/GenreFilter'; // Component for filtering shows by genre
import { fetchRecommendedShows } from './api'; // Function to fetch recommended shows from the API

const App = () => {
    // State to store the list of recommended shows
    const [recommendedShows, setRecommendedShows] = useState([]);
    // State to manage the loading state
    const [loading, setLoading] = useState(true);

    // Fetch the recommended shows when the component mounts
    useEffect(() => {
        const fetchShows = async () => {
            try {
                const shows = await fetchRecommendedShows(); // Fetch shows from the API
                setRecommendedShows(shows); // Update the state with fetched shows
            } catch (error) {
                console.error("Error fetching recommended shows:", error); // Handle any errors
            } finally {
                setLoading(false); // Set loading to false after fetching is done
            }
        };
        fetchShows(); // Call the function to fetch shows
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    return (
        <Router>
            <div className="app-container">
                <h1 className="app-title">Podcast App</h1>
                
                {/* Genre Filter to filter shows based on genre */}
                <GenreFilter genres={[]} onSelectGenre={() => {}} />
                
                {/* Show loading message while fetching data */}
                {loading ? (
                    <p>Loading recommended shows...</p>
                ) : (
                    // Once data is loaded, display the recommended shows
                    <FeaturedShows recommendedShows={recommendedShows} />
                )}
                
                {/* Define routes for the app */}
                <Switch>
                    {/* Route for the home page displaying the podcast list */}
                    <Route path="/" exact component={ShowPodcastList} />
                    {/* Route for favorites page displaying favorite episodes */}
                    <Route path="/favorites" component={FavoriteEpisodes} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
