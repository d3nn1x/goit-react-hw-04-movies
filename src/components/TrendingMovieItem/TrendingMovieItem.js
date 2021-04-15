import React from "react";
import { Link } from "react-router-dom";
import router from "../../router";

const TrendingMovieItem = ({ title, id, location }) => {
  return (
    <li className="trend_item">
      <Link to={{ pathname: `${router.movies}${id}`, state: { from: location } }}>{title}</Link>
    </li>
  );
};

export default TrendingMovieItem;
