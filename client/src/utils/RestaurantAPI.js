import axios from "axios";

export default axios.create({
  baseURL: "https://tripadvisor1.p.rapidapi.com/restaurants/list",
  responseType: "json"
});