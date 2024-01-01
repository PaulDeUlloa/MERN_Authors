import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./view/Dashboard";
import CreateAuthor from "./view/CreateAuthor";
import UpdateAuthor from "./view/UpdateAuthor";

function App() {
  return (
    <div className="App">
      <h1 id="favAuthorsColoring">Favorite Authors</h1>
      <button>
        <Link to="/authors">Home</Link>
      </button>
      <button>
        <Link to="/authors/new">Add an author</Link>
      </button>
      <hr />
      <Routes>
        <Route path="/authors" element={<Dashboard />} />
        <Route path="/authors/new" element={<CreateAuthor />} />
        <Route path="/authors/:id/edit" element={<UpdateAuthor />} />
      </Routes>
    </div>
  );
}

export default App;
