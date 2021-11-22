import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="movie-list">
      Not found, try to go <br />
      <Link to="/home">here</Link>
    </section>
  );
}

export default NotFound;
