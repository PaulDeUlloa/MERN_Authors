import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./view/Dashboard";
import CreateAuthor from "./view/CreateAuthor";
import UpdateAuthor from "./view/UpdateAuthor";

function App() {
  return (
    <div className="App">
      <h1 id="favAuthorsColoring">Favorite Authors</h1>
      <div id="navbarButtonsSpacing">
        <button id="navbarButtonsStyling">
          <Link to="/authors" id="navbarLinksFontColor">
            Home
          </Link>
        </button>
        <button id="navbarButtonsStyling">
          <Link to="/authors/new" id="navbarLinksFontColor">
            Add Author
          </Link>
        </button>
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
