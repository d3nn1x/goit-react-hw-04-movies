import React, { Component } from "react";
import movieApi from "../../services/movieApi";

class Cast extends Component {
  state = {
    cast: null,
    error: "",
  };

  async componentDidMount() {
    try {
      await movieApi.getMovieCasts(this.props.match.params.movieId).then((data) => {
        this.setState({ cast: data.cast });
      });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    const { cast, error } = this.state;
    return (
      <>
        {error && <h2>`Sorry, something went wrong: ${error.message}`</h2>}
        {cast && (
          <ul className="casts_list">
            {cast.map((el) => {
              let photo;
              el.profile_path
                ? (photo = `https://image.tmdb.org/t/p/w300/${el.profile_path}`)
                : (photo = "https://via.placeholder.com/300x450.png?text=NO+PHOTO");
              return (
                <li key={el.cast_id} className="casts_item">
                  <img src={photo} className="img" alt="" />

                  <p>{el.original_name}</p>
                  <p>Character:{el.character}</p>
                </li>
              );
            })}
          </ul>
        )}
        {cast && !cast.length && <h2>we don't have cast infromation for this movie</h2>}
      </>
    );
  }
}

export default Cast;
