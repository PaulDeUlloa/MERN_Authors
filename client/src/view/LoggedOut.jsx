import { NavLink } from "react-router-dom";

function LoggedOut() {
  return (
    <ul>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </ul>
  );
}

export default LoggedOut;
