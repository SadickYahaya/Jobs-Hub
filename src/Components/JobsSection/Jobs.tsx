import React from "react";
import Pagination from "@mui/material/Pagination";
import Job from "./Job/Job";
import { JobsContainer, JobsSection } from "./Jobs.styles";
import {
  jobInfo,
  jobInfo1,
  jobInfo2,
  jobInfo3,
  jobInfo4,
} from "../../Utils/JobData";
import JobTypeCheckbox from "../../Utils/Checkbox";
import JobLocationRadioButtons from "../../Utils/Radio";

const Jobs = () => {
  return (
    <JobsContainer>
      <div className="sidebar">
        <span>
          <JobTypeCheckbox />
        </span>
        <span className="radio-buttons">
          <JobLocationRadioButtons />
        </span>
      </div>
      <JobsSection>
        <div className="jobs">
          <Job {...jobInfo} />
          <Job {...jobInfo1} />
          <Job {...jobInfo2} />
          <Job {...jobInfo3} />
          <Job {...jobInfo4} />
          <Job {...jobInfo} />
          <Job {...jobInfo1} />
          <Job {...jobInfo2} />
          <Job {...jobInfo3} />
          <Job {...jobInfo4} />
        </div>
        <div className="pagination">
          <Pagination count={10} size="small" />
        </div>
      </JobsSection>
    </JobsContainer>
  );
};
export default Jobs;
