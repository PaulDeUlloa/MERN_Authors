import { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import { oneAuthor } from "../services/author-service.js";

function OneAuthor() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [getOneAuthor, setGetOneAuthor] = useState(null);

  // const [errors, setErrors] = useState([]);
  const {
    state: { user },
  } = useContext(AuthContext);

  //To protect our detail route of ('/authors/id) we will leverage useContext & AuthContext & useEffect
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

  useEffect(() => {
    oneAuthor(id)
      .then((getOneAuthor) => setGetOneAuthor(getOneAuthor))
      .catch((err) => console.log(err));
  }, []);

  return (
    getOneAuthor && (
      <div id="detailsPageCentering">
        <h1 id="detailsTitle">Details:</h1>

        <div id="detailsTextAlignment">
          <h2>Name: </h2>
          <p>{getOneAuthor.name}</p>
          <h2>Description: </h2>
          <p>{getOneAuthor.description}</p>
          <h2>Recommended: </h2>
          <p>{getOneAuthor.recommend ? "Yes." : "For now, not recommended."}</p>
        </div>
        <Link id="homeButtonAlignment" to={"/authors"}>
          <button id="homeButtonsFont" class="btn btn-light">
            Home
          </button>
        </Link>
      </div>
    )
  );
}

export default OneAuthor;
