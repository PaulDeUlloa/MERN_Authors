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
    <li id="linksColor" class="active">
      <details>
        <summary>Join Authors</summary>
        <ul>
          <li>
            <a onClick={handleLogin}>Login</a>
          </li>
          <li>
            <a onClick={handleRegister}>Register</a>
          </li>
        </ul>
      </details>
    </li>
  );
}

// href="/login"
// href="/register"

export default LoggedOut;
