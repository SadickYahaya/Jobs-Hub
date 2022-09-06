import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Job from "./Job/Job";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { getJobs } from "../../actions/jobs";
import { JobsContainer, JobsSection } from "./Jobs.styles";
import JobTypeCheckbox from "../../Utils/Checkbox";
import JobLocationRadioButtons from "../../Utils/Radio";
import DownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { useAppDispatch, useAppSelector } from "../../app/hooks";

const Jobs = () => {
  // const jobs = useAppSelector((state) => state.jobs);
  const [jobs, setJobs] = useState([]);
  // const [filters, setFilters] = useState([]);

  // const dispatch = useAppDispatch();
  const id = process.env.REACT_APP_ID;
  const key = process.env.REACT_APP_KEY;

  useEffect(() => {
    // dispatch(getJobs());
    fetch(
      `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${id}&app_key=${key}&results_per_page=5&category=`
    )
      .then((response) => response.json())
      .then((res) => setJobs(res.results))
      .catch((error) => console.log(error.message));
  }, [id, key]);

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
        <div className="top-bar">
          <span className="job-length">Showing 100258 Results</span>
          <div className="job-select">
            <span className="job-locations">Locations</span>
            <span>
              <DownIcon />
            </span>
          </div>
          <JobTypeCheckbox />
        </div>
        {jobs?.length > 0 ? (
          <div className="jobs">
            {jobs.map((job) => (
              <div>
                <Job job={job} key={job._id} />
              </div>
            ))}
          </div>
        ) : (
          <Stack spacing={1}>
            <Skeleton variant="rectangular" height={72} animation="wave" />
            <Skeleton variant="rectangular" height={72} animation="wave" />
            <Skeleton variant="rectangular" height={72} animation="wave" />
            <Skeleton variant="rectangular" height={72} animation="wave" />
            <Skeleton variant="rectangular" height={72} animation="wave" />
            <Skeleton variant="rectangular" width={720} height={72} />
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
