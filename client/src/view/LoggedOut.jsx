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
      <a onClick={handleLogin}>Login</a>

      <a onClick={handleRegister}>Register</a>
    </li>
  );
}

export default LoggedOut;
