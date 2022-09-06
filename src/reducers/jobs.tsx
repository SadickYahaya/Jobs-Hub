import { GET_JOBS } from "../app/types";

/* eslint-disable import/no-anonymous-default-export */
export const jobsReducer = (jobs = [], action) => {
  switch (action.type) {
    case GET_JOBS:
      return { ...jobs, jobs: action.payload };

    // case "FILTER_JOBS":
    //   return action.payload;

    // case "FETCH_JOB":
    //   return action.payload.job;

    // case "CLEAR_JOBS":
    //   return (jobs = []);
    default:
      return jobs;
  }
};
