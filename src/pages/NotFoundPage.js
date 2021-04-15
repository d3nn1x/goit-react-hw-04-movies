import React from "react";
import { Link } from "react-router-dom";
import router from "../router";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 page not found</h1>
      Перейдите по этой ссылке <Link to={router.home}>тут</Link>
    </div>
  );
};

export default NotFoundPage;
