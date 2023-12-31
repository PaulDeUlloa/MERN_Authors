import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [authorList, setAuthorList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors`)
      .then((res) => setAuthorList(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (deletedId) => {
    axios
      .delete(`http://localhost:8000/api/authors/${deletedId}`)
      .then(() => {
        removeFromDom(deletedId);
      })
      .catch((err) => console.log(err));
  };
  //* updates dom without refresh
  const removeFromDom = (deletedId) => {
    const filteredList = authorList.filter(
      (eachAuthor, idx) => eachAuthor._id !== deletedId
    );
    setAuthorList(filteredList);
  };

  return (
    <div>
      <h2>We have quotes by:</h2>
      <table id="tableCentering">
        <thead>
          <tr id="tableHeaderSpacing">
            <th>Author:</th>
            <th>Actions:</th>
          </tr>
        </thead>
        <tbody id="dashboardContentSpacing">
          {authorList.map((oneAuthor, idx) => {
            return (
              <tr key={idx}>
                <td id="authorNameFont">{oneAuthor.name}</td>
                <td id="editDeleteSpacing">
                  <Link to={`/authors/${oneAuthor._id}/edit`}>
                    <button>Edit</button>
                  </Link>
                  <Link>
                    <button onClick={() => handleDelete(oneAuthor._id)}>
                      Delete
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
