import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8000/api",
});

async function registerUser(registerForm) {
  try {
    const response = await http.post("/auth/register", registerForm);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// we user THROW ERROR so that the catch in CreateAuthor actually catches the error.
// if we don't throw the error it will never catch the error.

async function loginUser(loginForm) {
  try {
    const response = await http.post("/auth/login", loginForm);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { registerUser, loginUser };
