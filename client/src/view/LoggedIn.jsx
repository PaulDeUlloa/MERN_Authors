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
    <li class="active">
      <div class="dropdown">
        <a
          class=" btn btn-light dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {user.username}
        </a>

        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" onClick={handleProfile}>
              My Profile
            </a>
          </li>
          <li>
            <a class="dropdown-item" onClick={handleLogout}>
              Log out
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default LoggedIn;
