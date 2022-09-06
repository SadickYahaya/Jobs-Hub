import * as actionTypes from "../app/actionTypes";

const initialState: JobState = {
  jobs: [
    
  ],
};

const reducer = (
  state: JobState = initialState,
  action: JobAction
): JobState => {
  switch (action.type) {
    case actionTypes.GET_JOBS:
      const newJob: IJob = {
        id: action.job.id,
        title: action.job.title,
        location: action.job.location,
        company: action.job.company,
        created: action.job.created,
        count: action.job.count,
        contract_time: action.job.contract_time,
        description: action.job.description,
      };
      return {
        ...state,
        jobs: state.jobs.concat(newJob),
      };
    }
  return state;
};

export default reducer;
