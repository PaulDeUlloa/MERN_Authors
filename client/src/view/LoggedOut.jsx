import { useNavigate } from "react-router-dom";

function LoggedOut() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

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
          Join Authors
        </a>

        <ul class="dropdown-menu">
          <li>
            <a
              class="dropdown-item"
              onClick={handleLogin}
              id="loginLogoutDropDownFont"
            >
              Login
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a
              class="dropdown-item active"
              onClick={handleRegister}
              id="loginLogoutDropDownFont"
              aria-current="true"
            >
              Register
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
}

// href="/login"
// href="/register"

export default LoggedOut;
