import axios from "axios";

const id = process.env.REACT_APP_ID;
const key = process.env.REACT_APP_KEY;

export const fetchJobs = () => {
  return fetch(
    `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${id}&app_key=${key}&results_per_page=5`
  );
};

export const pagination = () => {
  return fetch(
    `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${id}&app_key=${key}&results_per_page=5&category=`
  );
};
