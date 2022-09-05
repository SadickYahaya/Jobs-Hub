import React, { useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Job from "./Job/Job";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getJobs } from "../../actions/jobs";
import { JobsContainer, JobsSection } from "./Jobs.styles";
import JobTypeCheckbox from "../../Utils/Checkbox";
import JobLocationRadioButtons from "../../Utils/Radio";
import { rootReducer } from "../../reducers";

type AppState = ReturnType<typeof rootReducer>;

const Jobs = () => {
  const jobs = useSelector((state: AppState) => state.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    getJobs();
  }, [dispatch]);

  return (
    <JobsContainer>
      <div className="sidebar">
        <span>
          <JobTypeCheckbox />
        </span>
        <span className="radio-buttons">
          <JobLocationRadioButtons />
        </span>
      </div>
      <JobsSection>
        {jobs?.length > 0 ? ( //if there invoices in our database
          <div className="jobs">
            {jobs.map((job) => (
              <div key={job._id}>
                <Job job={job} key={job._id} />
              </div>
            ))}
          </div>
        ) : (
          <Stack spacing={1}>
            <Skeleton
              variant="rectangular"
              width={600}
              height={72}
              animation="wave"
            />
            <Skeleton
              variant="rectangular"
              width={600}
              height={72}
              animation="wave"
            />
            <Skeleton
              variant="rectangular"
              width={600}
              height={72}
              animation="wave"
            />
            <Skeleton
              variant="rectangular"
              width={600}
              height={72}
              animation="wave"
            />
            <Skeleton
              variant="rectangular"
              width={600}
              height={72}
              animation="wave"
            />
          </Stack>
        )}

        <div className="pagination">
          <Pagination count={10} size="small" />
        </div>
      </JobsSection>
    </JobsContainer>
  );
};
export default Jobs;
