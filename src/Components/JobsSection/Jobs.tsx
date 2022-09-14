import React, { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { JobsContainer, JobsSection } from "./Jobs.styles";
// import Pagination from "@mui/material/Pagination";
import Job from "./Job/Job";
import useFetchJobs from "../../api/useFetchJobs";
import Header from "../Header/Header";
import Checkboxes from "../../Utils/Checkboxes";

const Jobs = () => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, error } = useFetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <>
      <Header params={params} onParamChange={handleParamChange} />
      <JobsContainer>
        <JobsSection>
          <div className="top-bar">
            <span className="job-length">Showing jobs</span>
            <div className="job-select">
              <Checkboxes params={params} onParamChange={handleParamChange} />
            </div>
          </div>
          <div className="error-message">
            {error && <span className="error">Error. Try Refreshing.</span>}
          </div>
          {jobs?.length > 0 ? (
            <div className="jobs">
              {jobs.map((job) => (
                <div key={jobs._id}>
                  <Job job={job} key={job._id} params={params} />
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
                width={600}
                height={72}
                animation="wave"
              />
            </Stack>
          )}
          <div className="pagination">
            {/* <Pagination
              count={5}
              shape="rounded"
              page={hasNextPage}
              // onChange={adjustPage}
            /> */}
          </div>
        </JobsSection>
      </JobsContainer>
    </>
  );
};
export default Jobs;
