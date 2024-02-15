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
          <label>Name: </label>
          <br></br>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div id="newAuthorButtonSpacing">
            <Link to="/authors">
              <button id="cancelSubmitButtonsFont" class="btn btn-light">
                Cancel
              </button>
            </Link>
            <button id="createSubmitButton" class="btn btn-light">
              <input type="submit" value="Submit" id="testDecorationSubmit" />
            </button>
          </div>
        </div>
      </form>
      {errors.map((err, idx) => {
        return <p key={idx}>{err}</p>;
      })}
    </div>
  );
};

export default CreateAuthor;
