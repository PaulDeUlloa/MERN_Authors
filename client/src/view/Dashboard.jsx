import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { allAuthors, deleteAuthor } from "../services/author-service";

const AllAuthors(){
  const navigate = useNavigate();
  const [authorList, setAuthorList] = useState([]);

  useEffect(() => {
    allAuthors()
      .then((authorList) => setAuthorList(authorList))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (authorId) => {
    deleteAuthor(authorId)
      .then(() => navigate('/authors'))
      .catch((err) => console.log(err));
  };

  //* updates dom without refresh
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
          {authorList.map((oneAuthor, idx) => {
            return (
              <tr key={idx}>
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
};

export default AllAuthors;
