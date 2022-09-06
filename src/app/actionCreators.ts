import * as actionTypes from "./actionTypes";
import { fetchJobs } from "../api";

export function FetchJobs(job: IJob) {
    const action: JobAction = {
    type: actionTypes.GET_JOBS,
        job,
    }
    return simulateHttpRequest(action)
  }

  export function simulateHttpRequest(action: JobAction) {
    return (dispatch: DispatchType) => {
      setTimeout(() => {
        dispatch(action)
      }, 500)
    }
  }