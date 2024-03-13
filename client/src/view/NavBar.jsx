import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

function NavBar() {
  const {
    state: { user },
  } = useContext(AuthContext);

  return (
    <nav>
      <input id="nav-toggle" type="checkbox" />
      <h1 id="navName">
        <Link to="/">
          <svg
            id="bookLogoSvg"
            width="125"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 76 29"
          >
            <g fill="#ffffff">
              <path
                d="M15.578 7.082c-3.54.707-9.913 6.017-10.972 6.726S0 14.516 0 14.516L23.014 27.26s3.54-.354 5.664-1.416 3.893-3.894 7.434-5.31c1.586-.636 4.637-1.382 7.316-1.653 1.183-.12 3.213-.057 4.367.474 1.61.738 4.017-.62 4.017-.62s1.293-1.742 4.834-2.095 6.371 1.416 9.204 1.416 8.852-1.77 8.852-1.77L51.334 2.125s-3.184 2.479-6.371 2.123-4.604-.705-7.436-.705-10.266 3.893-10.266 3.893-8.144-1.061-11.685-.353z"
                stroke="#d20505"
                fill="rgb(28, 97, 170)"
              />
              <path d="M49.565 18.056L27.261 6.019s7.435-3.894 10.266-3.894 4.249.354 7.436.707S51.334.709 51.334.709L74.701 14.87s-6.021 1.77-8.852 1.77-5.664-1.77-9.204-1.417-7.079 2.833-7.079 2.833z" />
            </g>
          </svg>
        </Link>
        Favorite Authors
      </h1>

      <ul id="nav-links">
        <li id="linksTag">
          <Link to="/authors" class="active" id="linksColor">
            All Authors
          </Link>
        </li>

        <li id="linksTag">
          <Link to="/authors/new" class="active" id="linksColor">
            Add Author
          </Link>
        </li>
        {/* Home button will not show until svg logo is gone and will appear in hamburger drop down. Per CSS, class="testSecondTag". */}
        <li class="testSecondTag" id="linksTag">
          <Link to="/" class="active" id="linksColor">
            Home
          </Link>
        </li>

        <ul id="linksTag">
          <li>
            <a id="loggedInNavBarButton">
              {user ? <LoggedIn /> : <LoggedOut />}
            </a>
          </li>
        </ul>
      </ul>

      <label for="nav-toggle" id="burger-icon">
        <div id="line"></div>
        <div id="line"></div>
        <div id="line"></div>
      </label>
    </nav>
  );
}

export default NavBar;
