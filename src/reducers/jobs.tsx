/* eslint-disable import/no-anonymous-default-export */
export default (jobs = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    case "FILTER_JOBS":
      return action.payload;

    case "FETCH_JOB":
      return action.payload.job;

    case "CLEAR_JOBS":
      return (jobs = []);
    default:
      return jobs;
  }
};
