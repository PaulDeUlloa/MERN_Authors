import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = (props) => {
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
      <p>Name: {oneAuthor.name}</p>
      <p>Description: {oneAuthor.description}</p>
      <Link to={"/authors"}>Home</Link>
    </div>
  );
};

export default Detail;
