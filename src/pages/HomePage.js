import React, { Component } from "react";
import movieApi from "../services/movieApi";

import TrendingMovieItem from "../components/TrendingMovieItem/TrendingMovieItem";

class HomePage extends Component {
  state = {
    movies: [],
    error: "",
  };

  async componentDidMount() {
    try {
      await movieApi.getTrending().then((data) => this.setState({ movies: data.results }));
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    const { movies, error } = this.state;

    return (
      <div>
        <h1>Trending today</h1>
        {error && <h2>`Whoops, something went wrong: ${error.message}`</h2>}
        <ul>
          {movies.map(({ id, original_title }) => (
            <TrendingMovieItem key={id} id={id} title={original_title} location={this.props.location} />
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
