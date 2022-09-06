import axios from "axios";

const url = "http://localhost:5000";

// const keyword = "developer";
// const location = "newyork";

export const fetchJobs = () => axios.get(url);
export const searchJobs = (searchQuery) =>
  axios.get(`${url}?what=${searchQuery}&where=${searchQuery}`);
export const fetchJob = (id) => axios.get(`${url}/${id}`);
