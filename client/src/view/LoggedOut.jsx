import { NavLink } from "react-router-dom";

function LoggedOut() {
  return (
    <div id="loggedOutNavBarWrapper">
      <li id="linksColor" class="active">
        <NavLink id="loggedInNavBarButton" to="/login">
          Login
        </NavLink>
      </li>
      <li id="linksColor" class="active">
        <NavLink id="loggedInNavBarButton" to="/register">
          Register
        </NavLink>
      </li>
    </div>
  );
}

export default LoggedOut;
