import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./view/Dashboard";
import CreateAuthor from "./view/CreateAuthor";
import UpdateAuthor from "./view/UpdateAuthor";
import GetStarted from "./view/GetStarted";
import Detail from "./view/Detail";
import Register from "./view/Register";
import Login from "./view/Login";

function App() {
  return (
    <div className="App">
      <footer id="footerStyling">
        <p id="copyrightPTag">
          Copyright &copy;2024 Authors; Designed by,
          <span id="copyrightSpanTag">
            <a id="copyrightAnchorTag" href="https://github.com/PaulDeUlloa">
              p. de ulloa
            </a>
          </span>
        </p>
      </footer>

      <div id="splash1"></div>
      <div id="splash2"></div>
      <div id="splash3"></div>
      <div id="splash4"></div>
      <div id="splash5"></div>
      <div id="smallSplash6"></div>
      <div id="smallSplash7"></div>

      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/authors" element={<Dashboard />} />
        <Route path="/authors/new" element={<CreateAuthor />} />
        <Route path="/authors/:id/edit" element={<UpdateAuthor />} />
        <Route path="/authors/:id" element={<Detail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
