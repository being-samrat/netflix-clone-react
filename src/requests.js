const APIKEY='6d4cf6cc0314d7c6f82e41f3d1a045bc';

const requests= {
    getTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    getNetFlixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    getTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    getAllMovies: `/discover/movie?api_key=${APIKEY}`,
    getActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    getComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`
}

export default requests;