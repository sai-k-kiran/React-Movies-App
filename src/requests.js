const APIKEY = '83d64a54840fbdbf961a6de7e04f615e';

const requests = {
    netflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    primeOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=1024`,
    genres: `/genre/movie/list?api_key=${APIKEY}&language=en-US`,
    now_playing: `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`,
    top: `/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
    popular: `/movie/popular?api_key=${APIKEY}&language=en-US&page=1`,


}

export default requests
// https://api.themoviedb.org/3/movie/120168?api_key=83d64a54840fbdbf961a6de7e04f615e&language=en-US