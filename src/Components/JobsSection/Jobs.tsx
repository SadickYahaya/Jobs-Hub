import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { JobsContainer, JobsSection } from "./Jobs.styles";
import DownIcon from "@mui/icons-material/KeyboardArrowDown";
import Job from "./Job/Job";
import useFetchJobs from "../../api/useFetchJobs";
import Header from "../Header/Header";

const Jobs = () => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, error } = useFetchJobs(params, page);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

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
            {/* <span className="job-length">Showing {jobs.length} jobs</span> */}
            <div className="job-select">
              <span className="job-locations">Locations</span>
              <span>
                <DownIcon />
              </span>
            </div>
          </div>
          <div>
            {error && <span className="error">Error. Try Refreshing.</span>}
          </div>
          {jobs?.length > 0 ? (
            <div className="jobs">
              {jobs.map((job) => (
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
              onChange={handlePageChange}
              count={10}
              size="small"
              page={page}
              defaultPage={1}
              // onChange={handleChange}
            />
          </div>
        </JobsSection>
      </JobsContainer>
    </>
  );
};
export default Jobs;
