import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UpdateAuthor = () => {
  const [name, setName] = useState("");

  const { id } = useParams();

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        const oneAuthor = res.data;
        setName(oneAuthor.name);
      })
      .catch((err) => console.log(err));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/authors/${id}`, { name })
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
        <div>
          <label>Name: </label>
          <br></br>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div>
            <Link to="/authors">
              <button>Cancel</button>
            </Link>{" "}
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
      {errors.map((err, idx) => {
        return <p key={idx}>{err}</p>;
      })}
    </div>
  );
};

export default UpdateAuthor;
