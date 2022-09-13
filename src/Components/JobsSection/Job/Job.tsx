import React from "react";
import { useNavigate } from "react-router-dom";
// import Skeleton from "@mui/material/Skeleton";
import CircleIcon from "@mui/icons-material/Circle";
import DefaultButton from "../../../Utils/Button";
import { viewJobButton } from "../../../Utils/JobData";
import { JobContainer } from "./Job.styles";

const Job = ({ job, params }) => {
  const changeColor = () => {
    let className = "";
    if (params.fullTime) {
      className = "type type-full";
    } else {
      className = "type type-part";
    }
    return className;
  };

  const navigate = useNavigate();
  const viewJob = () => {
    navigate(`/view-job/${job.jobId}`);
  };

  

  return (
    <>
      <JobContainer>
        <div className="job-info">
          <div className="job-title">
            <div>
              <span className="title" onClick={viewJob}>
                {job.jobTitle}
              </span>
              <span className={changeColor()}>
                {params.fullTime && !params.partTime ? (
                  "FullTime"
                ) : !params.fullTime && params.partTime ? (
                  "PartTime"
                ) : params.fullTime && params.partTime ? (
                  "FullTime or PartTime"
                ) : (
                  ' '
                )}
              </span>
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
            <div
              className="description"
              dangerouslySetInnerHTML={{
                __html: `<span id-'job-description'>${job.jobDescription.substring(
                  0,
                  250
                )} ...</span>`,
              }}
            ></div>
          </div>
        </div>
        <div className="button">
          <span className="job-logo">{job.employerName}</span>
          <span className="view-button" onClick={viewJob}>
            <DefaultButton {...viewJobButton} />
          </span>
        </div>
      </JobContainer>
    </>
  );
};

export default Job;
