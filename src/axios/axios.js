import axios from "axios";

//creating a base url, exporting it as axios.
//so now our axios is this baase url that we have created
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default instance;
