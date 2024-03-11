import axios from "axios";
import { useState, useContext, useEffect, useParams } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Detail = () => {
  const navigate = useNavigate();
  const [oneAuthor, setOneAuthor] = useState({});
  const {
    state: { user },
  } = useContext(AuthContext);
  const { id } = useParams();

  //To protect our detail route of ('/authors/id) we will leverage useContext & AuthContext & useEffect
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

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
