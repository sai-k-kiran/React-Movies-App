import axios from "axios";

const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/plain",
    },
  };

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    https: config
})
export default instance

// whenever we use axios, it will auto generate the baseUrl and whatever we pass as an arg to the axios will
// be appended to the baseUrl.