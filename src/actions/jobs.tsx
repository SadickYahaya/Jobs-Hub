// import { JobData } from "../Components/JobsSection/Job/Job";
import * as api from "./../api";

//Action Creators
export const getJob = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchJob(id);
    console.log(data);
    dispatch({ type: "FETCH_JOB", payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const getJobs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchJobs();
    console.log(data.json());
    dispatch({ type: "FETCH_ALL", payload: data.results.json });
  } catch (error) {
    console.log(error);
  }
};

export const searchJobs = (filterType) => async (dispatch) => {
  try {
    const { data } = await api.searchJobs(filterType);
    console.log(data);
    dispatch({ type: "FILTER_JOBS", payload: data.data.invoices });
  } catch (error) {
    console.log(error);
  }
};
