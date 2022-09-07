import React from "react";
import { useNavigate } from "react-router-dom";
// import Skeleton from "@mui/material/Skeleton";
import CircleIcon from "@mui/icons-material/Circle";
import DefaultButton from "../../../Utils/Button";
import { viewJobButton } from "../../../Utils/JobData";
import { JobContainer } from "./Job.styles";
// import jobLogo from "../../../Assets/job-logo.jpg";

const Job = ({ job }) => {
  const changeColor = () => {
    let className = "";
    if (job.contract_time === "full_time") {
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
          {/* <div className="job-logo">
            <img src={jobLogo} alt="" />
          </div> */}
          <div className="job-title">
            <div>
              <span className="title">{job.title}</span>
              <span className={changeColor()}>
                {job.contract_time || "N/A"}
              </span>
            </div>
            <div className="company-info">
              <span>{job.company.display_name}</span>
              <span>
                <CircleIcon className="dot" />
              </span>
              <span>{job.location.display_name}</span>
              <span>
                <CircleIcon className="dot" />
              </span>
              <span>{new Date(job.created).toLocaleDateString()}</span>
            </div>
            <h5 className="description">
              {job.description.substring(0, 150)} ...
            </h5>
          </div>
        </div>
        <div className="job-type">
          {/* <span className={changeColor()}>{job.contract_time || "N/A"}</span> */}
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
