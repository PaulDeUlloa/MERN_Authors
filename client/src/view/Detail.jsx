import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = () => {
  const [oneAuthor, setOneAuthor] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors/" + id)
      .then((res) => setOneAuthor(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="detailsPageCentering">
      <div id="detailsTextAlignment">
        <h2>Name: </h2>
        <p>{oneAuthor.name}</p>
        <h2>Description: </h2>
        <p>{oneAuthor.description}</p>
      </div>
      <Link to={"/authors"}>
        <button id="homeButtonsFont" class="btn btn-light">
          Home
        </button>
      </Link>
    </div>
  );
};

export default Detail;
