import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [authorList, setAuthorList] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => setAuthorList(res.data))
      .catch((err) => console.log(err));
  }, []);

  {
    authorList.map((oneAuthor, idx) => {
      return (
        <div id="detailsPageCentering">
          <p>Name: {oneAuthor.name}</p>
          <p>Description: {oneAuthor.description}</p>
        </div>
      );
    });
  }
};

export default Detail;
