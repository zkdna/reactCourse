import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID d5c06d9775b252e98dd5b4a1645fdd4e8103d64d97c47dcc361e2b85507fdf95"
  }
});
