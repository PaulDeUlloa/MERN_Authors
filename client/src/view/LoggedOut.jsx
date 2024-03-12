import { NavLink } from "react-router-dom";

function LoggedOut() {
  return (
    <div id="loggedOutNavBarWrapper">
      <li>
        <NavLink id="loggedOutNavLinks" to="/login">
          Login
        </NavLink>
      </li>

      <li>
        <NavLink id="loggedOutNavLinks" to="/register">
          Register
        </NavLink>
      </li>
    </div>
  );
}

export default LoggedOut;
