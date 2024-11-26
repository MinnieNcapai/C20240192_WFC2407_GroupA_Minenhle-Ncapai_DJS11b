import PropTypes from 'prop-types';

const GenreFilter = ({ genres, onSelectGenre }) => {
    return (
        <div>
            <h3>Filter by Genre</h3>
            <select onChange={(e) => onSelectGenre(e.target.value)}>
                <option value="">All Genres</option>
                {genres.map(genre => (
                    <option key={genre.id} value={genre.id}>{genre.title}</option>
                ))}
            </select>
        </div>
    );
};

GenreFilter.propTypes = {
    genres: PropTypes.array.isRequired,
    onSelectGenre: PropTypes.func.isRequired,
};

export default GenreFilter;
