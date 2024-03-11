import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function LoggedIn() {
  const {
    state: { user },
  } = useContext(AuthContext);

  return (
    <ul>
      <li>
        <NavLink to="/authors" end>
          All authors
        </NavLink>
      </li>
      <li>
        <NavLink to="/authors/new" end>
          Add a author
        </NavLink>
      </li>
      <li>
        <details>
          <summary>{user.username}</summary>
          <ul>
            <li>
              <a>My Profile</a>
            </li>
            <li>
              <a>Log out</a>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
}
