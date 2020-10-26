import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-mo-clone-7860.cloudfunctions.net/api", // the api url or cloud function
});

export default instance;
