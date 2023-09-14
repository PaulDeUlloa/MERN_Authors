import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./view/Dashboard";

function App() {
  return <div className="App">
    <h1>Favorite authors</h1>


    <hr />
    <Routes>
      <Route path="/authors" element={<Dashboard />} />

    </Routes>

  </div>;
}

export default App;
