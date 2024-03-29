import axios from "axios";

export default axios.create({
  baseURL: "http://54.237.223.229:8080/api/user",
});
axios.defaults.headers.common["access_token"] =
  sessionStorage.getItem("access_token");
axios.defaults.headers.common["refresh_token"] =
  sessionStorage.getItem("refresh_token");
axios.defaults.headers.common["userId"] = sessionStorage.getItem("userId");
