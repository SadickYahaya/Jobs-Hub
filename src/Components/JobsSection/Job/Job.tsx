import React from "react";
import { useNavigate } from "react-router-dom";
import RoomIcon from "@mui/icons-material/Room";
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
  const changeColor = () => {
    let className = "";
    if (jobType === "FullTime") {
      className = "type-full";
    } else {
      className = "type-part";
    }
    return className;
  };

  const navigate = useNavigate();
  return (
    <JobContainer>
      <div className="job-logo">
        <img src={jobLogo} alt="" />
      </div>
      <div className="job-info">
        <div className="job-title">
          <span className="title">{jobTitle}</span>
          <div className="type">
            <span className={changeColor()}>{jobType}</span>
            <div className="location">
              <RoomIcon />
              <span className="job-location">{jobLocation}</span>
            </div>
          </div>
        </div>
        <div className="job-description">
          <span className="description">{jobDescription}</span>
          <span className="view-button" onClick={() => navigate("/view-job")}>
            <DefaultButton {...viewJobButton} />
          </span>
        </div>
      </div>
    </JobContainer>
  );
};

export default Job;
