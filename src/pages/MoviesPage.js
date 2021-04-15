import React, { Component } from "react";
import queryString from "query-string";
import TrendingMovieItem from "../components/TrendingMovieItem/TrendingMovieItem";
import moviesApi from "../services/movieApi";

class MoviesPage extends Component {
  state = {
    movies: [],
    inputValue: "",
    error: "",
  };

  componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);
    if (query) {
      moviesApi
        .getMovieSearch(query)
        .then((data) => this.setState({ movies: data.results }))
        .catch((error) => this.setState({ error }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQueryParams } = queryString.parse(prevProps.location.search);
    const { query: newQueryParams } = queryString.parse(this.props.location.search);

    if (prevQueryParams !== newQueryParams) {
      moviesApi
        .getMovieSearch(newQueryParams)
        .then((data) => this.setState({ movies: data.results }))
        .catch((error) => this.setState({ error }));
    }
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputValue) {
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: `query=${this.state.inputValue}`,
      });
    }
    this.setState({ inputValue: "", error: "" });
  };

  render() {
    const { movies, inputValue } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="search" value={inputValue} onChange={this.handleChange} placeholder="Enter movie" />
          <button type="submit">Search</button>
        </form>
        <ul>
          {movies.map(({ id, original_title }) => (
            <TrendingMovieItem key={id} id={id} title={original_title} location={this.props.location} />
          ))}
        </ul>
      </div>
    );
  }
}

export default MoviesPage;
