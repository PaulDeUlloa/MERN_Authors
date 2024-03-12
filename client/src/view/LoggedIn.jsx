import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function LoggedIn() {
  const {
    state: { user },
  } = useContext(AuthContext);

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.setItem("user", "null");
    navigate("/login");
  };

  return (
    // <li>
    //   <NavLink to="/authors">All authors</NavLink>
    // </li>
    // <li>
    //   <NavLink to="/authors/new">Add a author</NavLink>
    // </li>
    <li id="linksColor" class="active">
      <details>
        <summary>{user.username}</summary>
        <ul>
          <li>
            <a>My Profile</a>
          </li>
          <li>
            <a onClick={handleLogout}>Log out</a>
          </li>
        </ul>
      </details>
    </li>
  );
}

export default LoggedIn;
