// import { JobData } from "../Components/JobsSection/Job/Job";
import { GET_JOBS } from "../app/types";
// import * as api from "./../api";
import axios from "axios";

//Action Creators
// export const getJob = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.fetchJob(id);
//     dispatch({ type: "FETCH_JOB", payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getJobs = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=de27ab59&app_key=80a06a1eaa48fd633b2bf0c144c19fe9&results_per_page=5"
    );
    dispatch({
      type: GET_JOBS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

// export const searchJobs =
//   (filterType: any) =>
//   async (dispatch: (arg0: { type: string; payload: any }) => void) => {
//     try {
//       const { data } = await api.searchJobs(filterType);
//       dispatch({ type: "FILTER_JOBS", payload: data.results });
//     } catch (error) {
//       console.log(error);
//     }
//   };
