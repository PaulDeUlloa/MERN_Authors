import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createAuthor } from "../services/author-service";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import ErrorAlert from "../view/ErrorAlert.jsx";

const initialAuthor = {
  name: "",
  description: "",
  recommend: true,
};

function CreateAuthor() {
  const {
    state: { user },
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const [author, setAuthor] = useState(initialAuthor);
  const [errors, setErrors] = useState(null);

  //To protect our CreateAuthor route of ('/authors/new) we will leverage useContext & AuthContext & useEffect
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

  const handleChange = (e) => {
    setAuthor({
      ...author,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheck = (e) => {
    setAuthor({
      ...author,
      recommend: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createAuthor(author)
      .then(() => navigate("/authors"))
      .catch((err) => {
        console.log(err);
        setErrors(err?.response?.data?.errors);
      });
  };

  //TODO: would like to update UI for CreateAuthor page.

  return (
    <div id="createPageCentering">
      <h2 id="createPageFont">Add a new author:</h2>
      {errors && <ErrorAlert message={errors} />}
      <form onSubmit={handleSubmit}>
        <div id="editAndCreateInputAndButtonsCentering">
          <div id="editAndCreateLabelSpacing">
            <label id="updateAndEditLabels">Name: </label>
            <input
              name="name"
              id="name"
              type="text"
              value={author.name}
              onChange={handleChange}
              size="23"
            />
          </div>
          <div id="editAndCreateLabelSpacing">
            <label id="updateAndEditLabels">Description: </label>
            <textarea
              name="description"
              id="description"
              type="text"
              value={author.description}
              onChange={handleChange}
              rows="3"
              cols="25"
            />
          </div>
          <div id="editAndCreateLabelSpacing">
            <label id="updateAndEditLabels">Recommend: </label>
            <input
              name="recommend"
              id="recommend"
              type="checkbox"
              checked={author.recommend}
              onChange={handleCheck}
            />
          </div>
          <div id="buttonSpacing">
            <button class="btn btn-light">
              <Link to="/authors" id="createAndEditLinksFontColor">
                Cancel
              </Link>
            </button>
            <button
              class="btn btn-light"
              type="submit"
              id="createAndEditLinksFontColor"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateAuthor;
