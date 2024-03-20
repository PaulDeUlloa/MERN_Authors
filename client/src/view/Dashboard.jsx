import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { allAuthors, deleteAuthor } from "../services/author-service";
import { AuthContext } from "../context/AuthContext";

function AllAuthors() {
  const navigate = useNavigate();
  const [authorList, setAuthorList] = useState([]);
  const {
    state: { user },
  } = useContext(AuthContext);

  //To protect our dashboard route of ('/authors) we will leverage useContext & AuthContext & useEffect
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

  useEffect(() => {
    allAuthors()
      .then((authorList) => setAuthorList(authorList))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (authorId) => {
    deleteAuthor(authorId)
      .then(() => navigate("/authors"))
      .catch((err) => console.log(err));
  };

  // * updates dom without refresh
  // const removeFromDom = (authorId) => {
  //   const filteredList = authorList.filter(
  //     (eachAuthor, idx) => eachAuthor._id !== authorId
  //   );
  //   setAuthorList(filteredList);
  // };

  return (
    <div id="allAuthorsBgColor">
      <table id="tableCentering" class="table table-dark table-hover">
        <thead class="table-light">
          <tr id="tableHeaderSpacing">
            <th id="tableHeadPadding">Authors</th>
            <th id="tableHeadPadding">Actions</th>
          </tr>
        </thead>
        <tbody id="dashboardContentSpacing">
          {authorList.map((oneAuthor) => {
            return (
              <tr key={oneAuthor._id}>
                <div id="tableDataSpacing">
                  <td>
                    <Link id="authorNameFont" to={`/authors/${oneAuthor._id}`}>
                      {oneAuthor.name}
                    </Link>
                  </td>
                  <td id="editDeleteSpacing">
                    <Link to={`/authors/${oneAuthor._id}/edit`}>
                      <button id="editDeleteButtonsFont" class="btn btn-light">
                        Edit
                      </button>
                    </Link>
                    <Link>
                      <button
                        id="editDeleteButtonsFont"
                        class="btn btn-light"
                        onClick={() => handleDelete(oneAuthor._id)}
                      >
                        Delete
                      </button>
                    </Link>
                  </td>
                </div>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AllAuthors;
