import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "../services/user-service";
import { useNavigate } from "react-router-dom";

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
        navigate("/");
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
      <section id="loginSectionStyling">
        <h1>Login</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div id="loginInputAndButtonsCentering">
              <div id="loginLabelsSpacing">
                <label htmlFor="email">Email:</label>
                <input
                  name="email"
                  type="text"
                  value={loginForm.email}
                  onChange={handleChange}
                />
              </div>
              <div id="loginLabelsSpacing">
                <label htmlFor="password">Password:</label>
                <input
                  name="password"
                  type="password"
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
