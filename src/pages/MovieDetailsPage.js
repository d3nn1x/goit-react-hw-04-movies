import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";

import movieApi from "../services/movieApi";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";
import router from "../router";

class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };
  async componentDidMount() {
    await movieApi.getMovieDetails(this.props.match.params.movieId).then((data) => {
      this.setState({ movie: data });
    });
  }

  goBack = () => {
    const { state } = this.props.location;
    if (state && state.from) {
      this.props.history.push(state.from);
      return;
    }
    this.props.history.push(router.home);
  };

  render() {
    const { movie } = this.state;
    const { state } = this.props.location;

    return (
      <>
        <button type="button" className="btn" onClick={this.goBack}>
          &#129044; Go to back
        </button>
        {movie && (
          <div className="card">
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
                className="poster"
              />
            )}
            <div className="desc">
              <h2 className="title">{movie.original_title}</h2>
              <p className="rating">Rating: {movie.vote_average || "no votes"}</p>
              <h3 className="overview">Overwiew</h3>
              <p className="info">{movie.overview || "We're sorry, this movie has no description :("}</p>
              <h4 className="genre">Genres</h4>
              <p>{movie.genres.map((genre) => `${genre.name} `)}</p>
            </div>
          </div>
        )}
        <div className="additionalInfo">
          <h4>Additional Information</h4>
          <ul>
            <li className="addListItem">
              {/* to={{
                  pathname: `${routes.movies}${this.props.match.params.movieId}/cast`,
                  state: {
                    from: state && state.from ? state.from : '',
                  },
                }} */}
              <Link
                to={{
                  pathname: `${router.movies}${this.props.match.params.movieId}/cast`,
                  state: {
                    from: state && state.from ? state.from : "",
                  },
                }}
                className="NavLink"
              >
                Cast
              </Link>
            </li>
            <li className="addListItem">
              <Link
                to={{
                  pathname: `${router.movies}${this.props.match.params.movieId}/reviews`,
                  state: {
                    from: state && state.from ? state.from : "",
                  },
                }}
                className="NavLink"
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path={router.movieCast} component={Cast} />
          <Route path={router.movieReviews} component={Reviews} />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;
