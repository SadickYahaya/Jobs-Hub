import React from "react";
import Job from "./Job/Job";
import { JobsContainer, JobsSection } from "./Jobs.styles";
import { jobInfo, jobInfo1, jobInfo2, jobInfo3, jobInfo4 } from "../../Utils/JobData";

const Jobs = () => {
  
  return (
    <JobsContainer>
      <h3>Jobs Found</h3>
      <JobsSection>
        <div className="sidebar"></div>
        <div className="jobs">
          <Job {...jobInfo} />
          <Job {...jobInfo1} />
          <Job {...jobInfo2} />
          <Job {...jobInfo3} />
          <Job {...jobInfo4} />
        </div>
      </JobsSection>
    </JobsContainer>
  );
};
export default Jobs;
