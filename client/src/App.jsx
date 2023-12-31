import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./view/Dashboard";
import CreateAuthor from "./view/CreateAuthor";
import UpdateAuthor from "./view/UpdateAuthor";

function App() {
  return (
    <div className="App">
      <div id="navBar">
        <svg width="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 29">
          <g fill="rgb(179, 179, 179)">
            <path
              d="M15.578 7.082c-3.54.707-9.913 6.017-10.972 6.726S0 14.516 0 14.516L23.014 27.26s3.54-.354 5.664-1.416 3.893-3.894 7.434-5.31c1.586-.636 4.637-1.382 7.316-1.653 1.183-.12 3.213-.057 4.367.474 1.61.738 4.017-.62 4.017-.62s1.293-1.742 4.834-2.095 6.371 1.416 9.204 1.416 8.852-1.77 8.852-1.77L51.334 2.125s-3.184 2.479-6.371 2.123-4.604-.705-7.436-.705-10.266 3.893-10.266 3.893-8.144-1.061-11.685-.353z"
              stroke="#806184"
              fill="rgb(156, 85, 3)"
            />
            <path d="M49.565 18.056L27.261 6.019s7.435-3.894 10.266-3.894 4.249.354 7.436.707S51.334.709 51.334.709L74.701 14.87s-6.021 1.77-8.852 1.77-5.664-1.77-9.204-1.417-7.079 2.833-7.079 2.833z" />
          </g>
        </svg>
        <h1 id="favAuthorsColoring">Favorite Authors</h1>
        <div id="navbarButtonsSpacing">
          <button class="btn btn-dark">
            <Link to="/authors" id="navbarLinksFontColor">
              Home
            </Link>
          </button>
          <button class="btn btn-dark">
            <Link to="/authors/new" id="navbarLinksFontColor">
              Add Author
            </Link>
          </button>
        </div>
      </div>

      <Routes>
        <Route path="/authors" element={<Dashboard />} />
        <Route path="/authors/new" element={<CreateAuthor />} />
        <Route path="/authors/:id/edit" element={<UpdateAuthor />} />
      </Routes>
    </div>
  );
}

export default App;
