import axios from "axios";

export default axios.create({
  baseURL: "https://dummyapi.io/data/v1/",
  headers: {
    "Content-type": "application/json",
    "app-id" : "631eddd422f9a61cb3dadbfc"
  }
});