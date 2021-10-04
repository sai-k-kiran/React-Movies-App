const APIKEY = '83d64a54840fbdbf961a6de7e04f615e';

const requests = {
    animation: `/discover/movie?api_key=${APIKEY}&with_genres=16`,
    documentary: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
    horror: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    music: `/discover/movie?api_key=${APIKEY}&with_genres=10402`,
    scifi: `/discover/movie?api_key=${APIKEY}&with_genres=878`,
    netflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    primeOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=1024`,
    now_playing: `/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`,
    popular: `/movie/popular?api_key=${APIKEY}&language=en-US&page=1`,
}

export default requests