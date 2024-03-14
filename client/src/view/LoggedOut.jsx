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
      <div class="dropdown">
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

        <ul class="dropdown-menu dropdown-menu-dark">
          <li>
            <a class="dropdown-item" onClick={handleLogin}>
              Login
            </a>
          </li>
          <li>
            <a
              class="dropdown-item active"
              onClick={handleRegister}
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
