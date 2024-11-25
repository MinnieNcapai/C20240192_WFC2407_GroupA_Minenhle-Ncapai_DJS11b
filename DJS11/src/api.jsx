

//function for fetching data from any URL
export const fetchData = async (url) => { 
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error occurred');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

// Fetch previews using the fetchData function
export const fetchPreviews = async () => {
    const url = 'https://podcast-api.netlify.app';
    return await fetchData(url);
};

// Fetch show by ID using the fetchData function
export const fetchShowById = async (id) => {
    const url = `https://podcast-api.netlify.app/id/${id}`;
    return await fetchData(url);
};

// Fetch genre by ID using the fetchData function
export const fetchGenreById = async (id) => {
    const url = `https://podcast-api.netlify.app/genre/${id}`;
    return await fetchData(url);
};

// Fetch recommended shows using the fetchData function
export const fetchRecommendedShows = async () => {
    const url = 'https://podcast-api.netlify.app/recommended';
    return await fetchData(url);
};
