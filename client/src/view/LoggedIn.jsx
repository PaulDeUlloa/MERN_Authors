import { useNavigate } from "react-router-dom";
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

  // TODO:Would like to add link for my profile to display users Information.
  return (
    <li>
      <div class="dropdown-center">
        <a
          class="btn btn-light dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          id="loginLogoutButtonsStyling"
        >
          Heeey, {user.username}
        </a>

        <ul class="dropdown-menu">
          <li>
            <a
              class="dropdown-item"
              id="loginLogoutDropDownFont"
              onClick={handleProfile}
            >
              My Profile
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a
              class="dropdown-item"
              id="loginLogoutDropDownFont"
              onClick={handleLogout}
            >
              Log out
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default LoggedIn;
