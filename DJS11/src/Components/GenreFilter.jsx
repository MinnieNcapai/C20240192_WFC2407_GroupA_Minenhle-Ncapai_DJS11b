import React from 'react';

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

export default GenreFilter;
