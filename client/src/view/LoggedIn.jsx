import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function LoggedIn() {
  const {
    state: { user },
  } = useContext(AuthContext);

  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.setItem("user", "null");
  };

  return (
    <ul>
      <li>
        <NavLink to="/authors">All authors</NavLink>
      </li>
      <li>
        <NavLink to="/authors/new">Add a author</NavLink>
      </li>
      <li>
        <details>
          <summary>{user.username}</summary>
          <ul>
            <li>
              <a>My Profile</a>
            </li>
            <li>
              <button onClick={handleLogout}>Log out</button>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
}

export default LoggedIn;
