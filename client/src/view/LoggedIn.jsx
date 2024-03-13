import { Link, useNavigate } from "react-router-dom";
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

  const handleProfile = () => {
    navigate("#");
  };

  return (
    <li id="linksColor" class="active">
      <details>
        <summary>{user.username}</summary>
        <ul id="testJd">
          <li>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={handleProfile}
            >
              My Profile
            </button>
          </li>
          <li>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={handleLogout}
            >
              Log out
            </button>
          </li>
        </ul>
      </details>
    </li>
  );
}

export default LoggedIn;
