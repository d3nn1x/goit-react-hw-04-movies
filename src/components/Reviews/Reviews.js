import React, { Component } from "react";
import movieApi from "../../services/movieApi";

class Reviews extends Component {
  state = {
    reviews: null,
    error: "",
  };

  async componentDidMount() {
    try {
      await movieApi.getMovieReviews(this.props.match.params.movieId).then((data) => {
        this.setState({ reviews: data.results });
      });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    const { reviews, error } = this.state;

    return (
      <>
        {error && <h2>`Sorry, something went wrong: ${error.message}`</h2>}
        <ul className="reviewList">
          {reviews &&
            reviews.map((review) => (
              <li key={review.id} className="reviewItem">
                <p className="reviewContentAuthor">Author: {review.author}</p>
                <p className="reviewContent">{review.content}</p>
              </li>
            ))}
          {reviews && !reviews.length && <li>We don't have reviews infromation for this movie</li>}
        </ul>
      </>
    );
  }
}

export default Reviews;
