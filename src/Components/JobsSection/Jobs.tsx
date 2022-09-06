import React, { useEffect, useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { FetchJobs } from "../../app/actionCreators";
import { Dispatch } from "redux";
import { JobsContainer, JobsSection } from "./Jobs.styles";
import JobTypeCheckbox from "../../Utils/Checkbox";
import JobLocationRadioButtons from "../../Utils/Radio";
import DownIcon from "@mui/icons-material/KeyboardArrowDown";
import Job from "./Job/Job";
import { fetchJobs } from "../../api";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);

  // const jobs: readonly IJob[] = useSelector(
  //   (state: JobState) => state.jobs,
  //   shallowEqual
  // );
  // const dispatch: Dispatch<any> = useDispatch();
  const id = process.env.REACT_APP_ID;
  const key = process.env.REACT_APP_KEY;

  useEffect(() => {
    fetchJobs()
      .then((response) => response.json())
      .then((res) => setJobs(res.results))
      .catch((error) => console.log(error.message));
  }, [id, key]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    fetch(
      `https://api.adzuna.com/v1/api/jobs/us/search/${page}?app_id=${id}&app_key=${key}&results_per_page=5&category=it-jobs`
    )
      .then((response) => response.json())
      .then((res) => setJobs(res.results))
      .catch((error) => console.log(error.message));
    setPage(value);
    console.log(page);
  };

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
            {jobs.map((job: IJob) => (
              <div>
                <Job job={job} key={job.id} />
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
            <Skeleton
              variant="rectangular"
              width={720}
              height={72}
              animation="wave"
            />
          </Stack>
        )}
        <div className="pagination">
          <Pagination
            count={10}
            size="small"
            page={page}
            defaultPage={1}
            onChange={handleChange}
          />
        </div>
      </JobsSection>
    </JobsContainer>
  );
};
export default Jobs;
