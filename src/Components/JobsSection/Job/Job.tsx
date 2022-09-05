import React from "react";
import { useNavigate } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";
import DefaultButton from "../../../Utils/Button";
import { viewJobButton } from "../../../Utils/JobData";
import { JobContainer } from "./Job.styles";
import jobLogo from "../../../Assets/job-logo.jpg";

interface JobInfoProps {
  job: JobData;
}

export interface JobData {
  title: string;
  company: string;
  location: string;
  created: string;
  display_name: string;
  contract_type: string;
}

const Job = ({ job }: JobInfoProps) => {
  // const changeColor = () => {
  //   let className = "";
  //   if (jobType === "FullTime") {
  //     className = "type type-full";
  //   } else {
  //     className = "type type-part";
  //   }
  //   return className;
  // };

  const navigate = useNavigate();

  return (
    <>
      <JobContainer>
        <div className="job-info">
          <div className="job-logo">
            <img src={jobLogo} alt="" />
          </div>
          <div className="job-title">
            <span className="title">{job.title}</span>
            <div className="company-info">
              <span>{job.company}</span>
              <span>
                <CircleIcon className="dot" />
              </span>
              <span>{job.location}</span>
              <span>
                <CircleIcon className="dot" />
              </span>
              <span>{job.created} days ago</span>
            </div>
          </div>
        </div>
        <div className="job-type">
          <span className="type">{job.contract_type}</span>
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
