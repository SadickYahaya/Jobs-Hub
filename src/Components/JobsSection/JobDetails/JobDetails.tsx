import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import { useParams } from "react-router-dom";
import { HeaderStyles, Nav } from "../../Header/Header.styles";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import BackArrow from "@mui/icons-material/KeyboardBackspace";
import CircleIcon from "@mui/icons-material/Circle";
import { JobDetailsContainer, JobDetail } from "./JobsDetails.styles";

interface JobDetailsProps {
  jobTitle: string;
  fullTime: boolean;
  partTime: boolean;
  locationName: string;
  jobUrl: string;
  jobDescription: string;
  employerName: string;
  datePosted: string;
  contractType: string;
  jobId?: number;
}

const JobDetails = () => {
  // @ts-ignore: Argument of type 'string' is not assignable to parameter of type 'number'.
  const [jobDetail, setJobDetail] = useState<JobDetailsProps>([]);
  const { jobId } = useParams();

  useEffect(() => {
    if (jobId) {
      axios
        .get(
          `https://corsanywhere.herokuapp.com/https://www.reed.co.uk/api/1.0/jobs/${jobId}`,
          {
            auth: {
              username: "2bae01d5-cc4a-4e8e-a763-164a7f535944",
              password: "",
            },
          }
        )
        .then((res?: any) => {
          setJobDetail(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [jobId]);

  const changeColor = () => {
    let className = "";
    if (jobDetail.fullTime === true) {
      className = "type type-full";
    } else {
      className = "type type-part";
    }
    return className;
  };

  const goBack = () => {
    window.location.href = "/";
  };

  return (
    <>
      <HeaderStyles>
        <Nav>
          <WorkOutlineIcon />
          <h3>
            Jobs <span>Hub</span>
          </h3>
        </Nav>
      </HeaderStyles>
      <JobDetailsContainer>
        <div className="go-back" onClick={goBack}>
          <BackArrow />
          <span>Previous Page</span>
        </div>
        <div className="details-section">
          <JobDetail>
            <div className="job-info-container">
              <div className="job-info">
                <div className="job-title">
                  <span className="title">{jobDetail.jobTitle}</span>
                  <div className="details-type">
                    <div className="location">
                      <span className="job-location">
                        {jobDetail.employerName}
                      </span>
                      <CircleIcon className="dot" />
                      <span className="job-location">
                        {jobDetail.locationName}
                      </span>
                      <CircleIcon className="dot" />
                      <span className="job-location">
                        {jobDetail.datePosted}
                      </span>
                    </div>
                  </div>
                  <div className="details-jobType">
                    <span className={changeColor()}>
                      {jobDetail.fullTime && !jobDetail.partTime ? (
                        "FullTime"
                      ) : !jobDetail.fullTime && jobDetail.partTime ? (
                        "PartTime"
                      ) : jobDetail.fullTime && jobDetail.partTime ? (
                        "FullTime or PartTime"
                      ) : (
                        <Skeleton />
                      )}
                    </span>
                    <span className="contract-type">
                      {jobDetail.contractType}
                    </span>
                  </div>
                </div>
                <div className="logo-container">
                  <span className="job-logo">{jobDetail.employerName}</span>
                </div>
              </div>
              <div
                className="job-description"
                dangerouslySetInnerHTML={{
                  __html: `<span id-'job-description'>${jobDetail.jobDescription}</span>`,
                }}
              />
              <div className="apply-now">
                <a href={jobDetail.jobUrl} target="_blank" rel="noreferrer">
                  Apply Now
                </a>
              </div>
            </div>
          </JobDetail>
        </div>
      </JobDetailsContainer>
    </>
  );
};

export default JobDetails;
