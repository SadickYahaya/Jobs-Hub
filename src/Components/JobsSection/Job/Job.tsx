import React from "react";
import { useNavigate } from "react-router-dom";
// import Skeleton from "@mui/material/Skeleton";
import CircleIcon from "@mui/icons-material/Circle";
import DefaultButton from "../../../Utils/Button";
import { viewJobButton } from "../../../Utils/JobData";
import { JobContainer } from "./Job.styles";
// import jobLogo from "../../../Assets/job-logo.jpg";

const Job = ({ job }) => {
  // const changeColor = () => {
  //   let className = "";
  //   if (job.contract_time === "full_time") {
  //     className = "type type-full";
  //   } else {
  //     className = "type type-part";
  //   }
  //   return className;
  // };

  const navigate = useNavigate();
  const viewJob = () => {
    navigate(`/view-job/${job.jobId}`);
  };

  return (
    <>
      <JobContainer>
        <div className="job-info">
          {/* <div className="job-logo">
            <img src={jobLogo} alt="" />
          </div> */}
          <div className="job-title">
            <div>
              <span className="title">{job.jobTitle}</span>
              {/* <span className={changeColor()}>{job.jobType || "N/A"}</span> */}
            </div>
            <div className="company-info">
              <span>{job.employerName}</span>
              <span>
                <CircleIcon className="dot" />
              </span>
              <span>{job.locationName}</span>
              <span>
                <CircleIcon className="dot" />
              </span>
              <span>{job.date}</span>
            </div>
            <h5 className="description">
              {job.jobDescription.substring(0, 250)} ...
            </h5>
          </div>
        </div>
        <div className="button">
          <span className="view-button" onClick={viewJob}>
            <DefaultButton {...viewJobButton} />
          </span>
        </div>
      </JobContainer>
    </>
  );
};

export default Job;
