import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = (props) => {
  const [name, setName] = useState({});
  const [description, setDescription] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors/" + id)
      .then((res) => {
        const oneAuthor = res.data;
        setName(oneAuthor.name);
        setDescription(oneAuthor.description);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="detailsPageCentering">
      <p>Name: {name.name}</p>
      <p>Description: {description.description}</p>
    </div>
  );
};

export default Details;
