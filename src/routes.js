import router from "./router";
import { lazy } from "react";

const routes = [
  { path: router.home, exact: true, component: lazy(() => import("./pages/HomePage")) },
  { path: router.movies, exact: true, component: lazy(() => import("./pages/MoviesPage")) },
  { path: router.movieDetails, exact: false, component: lazy(() => import("./pages/MovieDetailsPage")) },
  { path: null, exact: false, component: lazy(() => import("./pages/NotFoundPage")) },
];

export default routes;
