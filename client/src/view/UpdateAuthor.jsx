import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UpdateAuthor = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { id } = useParams();

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        const oneAuthor = res.data;
        setName(oneAuthor.name);
        setDescription(oneAuthor.description);
      })
      .catch((err) => console.log(err));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/authors/${id}`, { name, description })
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
    <div id="updatePageCentering">
      <h2 id="editTitleColoring">Edit this author:</h2>
      <form onSubmit={submitHandler}>
        <div id="editAndCreateInputAndButtonsCentering">
          <div id="editAndCreateLabelSpacing">
            <label id="updateAndEditLabels">Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              size="22"
            />
          </div>
          <div id="editAndCreateLabelSpacing">
            <label id="updateAndEditLabels">Description: </label>
            <textarea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              cols="24"
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

export default UpdateAuthor;
