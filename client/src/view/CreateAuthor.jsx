import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAuthor } from "../services/author-service";
import { Link } from "react-router-dom";

const initialAuthor = {
  name: "",
  description: "",
};

function CreateAuthor() {
  const navigate = useNavigate();
  const [author, setAuthor] = useState(initialAuthor);
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setAuthor({
      ...author,
      [e.target.name]: e.target.value,
    });
  };

  // if we wanted a check Box, we should use this.
  // const handleCheck = (e) => {
  //   setAuthor({
  //     ...author,
  //     wouldRecommend: e.target.checked,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    createAuthor(author)
      .then(() => navigate("/authors"))
      .catch((err) => console.log(err));
  };

  return (
    <div id="createPageCentering">
      <h2 id="createPageFont">Add a new author:</h2>
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
          {/* <div id="editAndCreateLabelSpacing">
            <label id="updateAndEditLabels">Recommend: </label>
            <input
              name="recommend"
              id="recommend"
              type="checkbox"
              checked={author.recommend}
              onChange={handleCheck}
            />
          </div> */}
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
      {errors.map((err, idx) => {
        return (
          <p id="errorMessagesColor" key={idx}>
            {err}
          </p>
        );
      })}
    </div>
  );
}

export default CreateAuthor;
