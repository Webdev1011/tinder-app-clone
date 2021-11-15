import axios from "axios";

const instance = axios.create({
  baseURL: "https://t--backend-app.herokuapp.com/",
});

export default instance;
