import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/mo-clone-7860/us-central1/api", // the api url or cloud function
});

export default instance;
