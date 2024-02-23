import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CreateAuthor = () => {
  const [name, setName] = useState("");

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8000/api/authors`, { name })
      .then(() => navigate("/authors"))
      .catch((err) => {
        const errResponse = err.response.data.errors;
        const errArr = [];
        for (const key in errResponse) {
          errArr.push(errResponse[key].message);
        }
        setErrors(errArr);
      });
  };

  return (
    <div id="createPageCentering">
      <h2 id="createPageFont">Add a new author:</h2>
      <form onSubmit={submitHandler}>
        <div>
          <div id="editAndCreateLabelSpacing">
            <label id="updateAndEditLabels">Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div id="buttonSpacing">
            <button class="btn btn-dark">
              <Link to="/authors" id="navbarLinksFontColor">
                Cancel
              </Link>
            </button>
            <button
              class="btn btn-dark"
              type="submit"
              id="navbarLinksFontColor"
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
};

export default CreateAuthor;
