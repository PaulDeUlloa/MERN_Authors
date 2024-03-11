import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "../services/user-service";
import { Navigate, useNavigate } from "react-router-dom";

const initialForm = {
  email: "",
  password: "",
};

function Login() {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialForm);
  const { dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(loginForm)
      .then((userData) => {
        console.log(userData);
        dispatch({ type: "LOGIN", payload: userData });
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/authors");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="loginWrapper">
      <section>
        <h1>Login</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  name="email"
                  id="email"
                  type="text"
                  value={loginForm.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  name="password"
                  id="password"
                  type="text"
                  value={loginForm.password}
                  onChange={handleChange}
                />
              </div>
              <button
                class="btn btn-light"
                type="submit"
                id="createAndEditLinksFontColor"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
