import React from "react";
import Navbars from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Lazy load the component using dynamic import

const HomePage = React.lazy(() => import("./components/HomePage"));
const TvShow = React.lazy(() => import("./components/TvShow"));
const SingleMoviesPage = React.lazy(() => import("./components/SinglePage"));
const App = () => {
  return (
    <Router>
      <Navbars />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/tvshow" element={<TvShow />} />
          <Route path="/movies/:id" element={<SingleMoviesPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
