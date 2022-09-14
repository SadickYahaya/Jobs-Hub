import React, { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { JobsContainer, JobsSection } from "./Jobs.styles";
import Job from "./Job/Job";
import useFetchJobs from "../../api/useFetchJobs";
import Header from "../Header/Header";
import Checkboxes from "../../Utils/Checkboxes";
import Pagination from "./JobsPagination";

const Jobs = () => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, error } = useFetchJobs(params);

  const [postsPerPage] = useState(5);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentJobs = jobs.slice(indexOfFirstPost, indexOfLastPost);

  console.log(jobs);
  console.log(currentJobs);

  console.log("indexOfLastPost " + indexOfLastPost);
  console.log("indexOfFirstPost " + indexOfFirstPost);

  // Change page
  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setPage(pageNumber);

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
          {currentJobs?.length > 0 ? (
            <div className="jobs">
              {currentJobs.map((job) => (
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
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={currentJobs?.length}
              paginate={paginate}
            />
          </div>
        </JobsSection>
      </JobsContainer>
    </>
  );
};
export default Jobs;
