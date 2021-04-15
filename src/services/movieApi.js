import axios from "axios";

class MovieService {
  API_KEY = "6f87fdba3bd48e31c9ff610ba7f04b74";

  BASE_URL = "https://api.themoviedb.org/3/";

  getTrending = () => {
    return axios.get(`${this.BASE_URL}trending/movie/day?api_key=${this.API_KEY}`).then((res) => res.data);
  };

  getMovieDetails = (id) => {
    return axios.get(`${this.BASE_URL}movie/${id}?api_key=${this.API_KEY}&language=en-US`).then((res) => res.data);
  };

  getMovieCasts = (id) => {
    return axios
      .get(`${this.BASE_URL}movie/${id}/credits?api_key=${this.API_KEY}&language=en-US`)
      .then((res) => res.data);
  };

  getMovieReviews = (id) => {
    return axios
      .get(`${this.BASE_URL}movie/${id}/reviews?api_key=${this.API_KEY}&language=en-US`)
      .then((res) => res.data);
  };

  getMovieSearch = (query = "", page = 1) => {
    return axios
      .get(
        `${this.BASE_URL}search/movie?api_key=${this.API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
      )
      .then((res) => res.data);
  };
}

const movieService = new MovieService();

export default movieService;
