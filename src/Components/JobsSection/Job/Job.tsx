import React from "react";
import DefaultButton from "../../../Utils/Button";
import { viewJobButton } from "../../../Utils/JobData";
import { JobContainer } from "./Job.styles";

interface JobInfo {
  jobLogo: string;
  jobTitle: string;
  jobType: string;
  jobLocation: string;
  jobDescription: string;
}

const Job = ({
  jobLogo,
  jobTitle,
  jobType,
  jobLocation,
  jobDescription,
}: JobInfo) => {
  return (
    <JobContainer>
      <div className="job-logo">
        <img src={jobLogo} alt="" />
      </div>
      <div className="job-info">
        <div className="job-title">
          <span>{jobTitle}</span>
          <div>
            <span className="job-type">{jobType}</span>
            <span className="job-location">{jobLocation}</span>
          </div>
        </div>
        <div className="job-description">
          <span>{jobDescription}</span>
          <span className='view-button'><DefaultButton {...viewJobButton} /></span>
        </div>
      </div>
    </JobContainer>
  );
};

export default Job;
