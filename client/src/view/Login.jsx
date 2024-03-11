import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "../services/user-service";

// registerUser(registerForm)
//       .then((userData) => {
//         console.log(userData);
//         dispatch({ type: "LOGIN", payload: userData });
//         localStorage.setItem("user", JSON.stringify(userData));
//       })
//       .catch((err) => console.log(err));

function Login() {
  return (
    <div id="loginWrapper">
      <section>
        <h1>Login</h1>
        <div>
          <form>
            <div>
              <div>
                <label htmlFor="email">Email:</label>
                <input name="email" id="email" type="text" />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input name="password" id="password" type="text" />
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
