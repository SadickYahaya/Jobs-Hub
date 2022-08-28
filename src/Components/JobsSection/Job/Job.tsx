import React from "react";
import { useNavigate } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";
// import RoomIcon from "@mui/icons-material/Room";
import DefaultButton from "../../../Utils/Button";
import { viewJobButton } from "../../../Utils/JobData";
import { JobContainer } from "./Job.styles";

interface JobInfo {
  jobLogo: string;
  companyName: string;
  jobTitle: string;
  jobType: string;
  jobLocation: string;
  jobDescription: string;
  timePosted: string;
}

const Job = ({
  jobLogo,
  companyName,
  jobTitle,
  jobType,
  jobLocation,
  jobDescription,
  timePosted,
}: JobInfo) => {
  const changeColor = () => {
    let className = "";
    if (jobType === "FullTime") {
      className = "type type-full";
    } else {
      className = "type type-part";
    }
    return className;
  };

  const navigate = useNavigate();
  return (
    <>
      <JobContainer>
        <div className="job-info">
          <div className="job-logo">
            <img src={jobLogo} alt="" />
          </div>
          <div className="job-title">
            <span className="title">{jobTitle}</span>
            <div className="company-info">
              <span>{companyName}</span>
              <span>
                <CircleIcon className="dot" />
              </span>
              <span>{jobLocation}</span>
              <span>
                <CircleIcon className="dot" />
              </span>
              <span>{timePosted} days ago</span>
            </div>
          </div>
        </div>
        <div className="job-type">
          <span className={changeColor()}>{jobType}</span>
          <div className="button">
            <span className="view-button" onClick={() => navigate("/view-job")}>
              <DefaultButton {...viewJobButton} />
            </span>
          </div>
        </div>
      </JobContainer>
    </>
  );
};

export default Job;
