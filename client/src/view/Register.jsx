import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { registerUser } from "../services/user-service.js";
import { useNavigate } from "react-router-dom";
// import ErrorAlert from "../view/ErrorAlert.jsx";

const initialForm = {
  username: "",
  email: "",
  password: "",
};

function Register() {
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialForm);

  const { dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(registerForm)
      .then((userData) => {
        console.log(userData);
        dispatch({ type: "LOGIN", payload: userData });
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err?.response?.data?.errors);
      });
  };

  const handleChange = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };

  //TODO: Need to add error messages so if a user makes in error it was display to the user we registering.

  return (
    <div id="registerWrapper">
      <section id="registerSectionStyling">
        <h1>Register</h1>

        <div>
          <form onSubmit={handleSubmit}>
            <div id="registerInputAndButtonsCentering">
              <div id="registerLabelsSpacing">
                <label htmlFor="username">Username:</label>
                <input
                  name="username"
                  id="username"
                  type="text"
                  value={registerForm.username}
                  onChange={handleChange}
                />
              </div>
              <div id="registerLabelsSpacing">
                <label htmlFor="email">Email:</label>
                <input
                  name="email"
                  id="email"
                  type="text"
                  value={registerForm.email}
                  onChange={handleChange}
                />
              </div>
              <div id="registerLabelsSpacing">
                <label htmlFor="password">Password:</label>
                <input
                  name="password"
                  id="password"
                  type="password"
                  value={registerForm.password}
                  onChange={handleChange}
                />
              </div>
              <button
                class="btn btn-light"
                type="submit"
                id="createAndEditLinksFontColor"
              >
                Register
              </button>
            </div>
          </form>
          {/* {errors.map((err, idx) => {
            return (
              <p id="errorMessagesColor" key={idx}>
                {err}
              </p>
            );
          })} */}
        </div>
      </section>
    </div>
  );
}

export default Register;
