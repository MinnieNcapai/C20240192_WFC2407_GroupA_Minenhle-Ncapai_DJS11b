import PropTypes from 'prop-types'; // Import PropTypes

const GenreFilter = ({ genres, onSelectGenre }) => {
    return (
        <div>
            <h3>Filter by Genre</h3>
            <select onChange={(e) => onSelectGenre(e.target.value)}>
                <option value="">All Genres</option>
                {genres.map(genre => (
                    <option key={genre} value={genre}>{genre}</option>
                ))}
            </select>
        </div>
    );
};

// Prop validation
GenreFilter.propTypes = {
    genres: PropTypes.array.isRequired,  // Expecting an array for genres
    onSelectGenre: PropTypes.func.isRequired, // Expecting a function for onSelectGenre
};

export default GenreFilter;
