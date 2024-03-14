import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { oneAuthor } from "../services/author-service";

function OneAuthor() {
  const navigate = useNavigate();
  const [authorList, setAuthorList] = useState([]);
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
    oneAuthor()
      .then((authorList) => setAuthorList(authorList))
      .catch((err) => console.log(err));
  }, []);

  {
    authorList.map((oneAuthor) => {
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
    });
  }
}

export default OneAuthor;
