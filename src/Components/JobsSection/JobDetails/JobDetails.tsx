import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderStyles, Nav } from "../../Header/Header.styles";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import BackArrow from "@mui/icons-material/KeyboardBackspace";
import RoomIcon from "@mui/icons-material/Room";
import { JobDetailsContainer, JobDetail } from "./JobsDetails.styles";
import logo from "../../../Assets/logo3.jpg";

const JobDetails = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderStyles>
        <Nav>
          <WorkOutlineIcon />
          <h2>
            Jobs <span>Hub</span>
          </h2>
        </Nav>
      </HeaderStyles>
      <JobDetailsContainer>
        <div className="go-back" onClick={() => navigate("/")}>
          <BackArrow />
          <span>Previous Page</span>
        </div>
        <h3>Job Details</h3>
        <div className="details-section">
          <JobDetail>
            <div className="job-info-container">
              <div className="job-info">
                <div className="job-title">
                  <span className="title">Junior Front-End Engineer</span>
                  <div className="type">
                    <span className="job-type">FullTIme</span>
                    <div className="location">
                      <RoomIcon />
                      <span className="job-location">Accra, Ghana</span>
                    </div>
                  </div>
                </div>
                <div className="logo-container">
                  <img src={logo} alt="" />
                </div>
              </div>
              <div className="job-description">
                <h3>Overview</h3>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagittis ipsum. Praesent mauris.
                </span>
              </div>
            </div>
          </JobDetail>
        </div>
      </JobDetailsContainer>
    </>
  );
};

export default JobDetails;
