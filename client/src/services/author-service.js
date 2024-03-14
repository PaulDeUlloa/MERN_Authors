import axios from "axios";

//creating axios instance here
const http = axios.create({
  baseURL: "http://localhost:8000/api",
});

const user = localStorage.getItem("user");
const authConfig = {};

if (user) {
  authConfig.headers = {
    Authorization: `Bearer: ${user.token}`,
  };
}

async function createAuthor(author) {
  try {
    const res = await http.post("/authors", author, authConfig);
    return res.data;
  } catch (error) {
    throw error;
  }
}

async function allAuthors() {
  try {
    const response = await http.get("/authors");
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function oneAuthor(id) {
  try {
    const response = await http.get(`/authors/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function updateAuthor(author) {
  try {
    const response = await http.patch(`/authors/${author._id}`, author);
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function deleteAuthor(id) {
  try {
    const response = await http.delete(`/authors/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export { createAuthor, allAuthors, oneAuthor, updateAuthor, deleteAuthor };
