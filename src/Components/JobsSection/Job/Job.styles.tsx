import styled from "styled-components";

export const JobContainer = styled.div`
  height: auto;
  width: auto;
  padding: 1em;
  background-color: #f3f3f3;
  display: flex;
  gap: 1em;
  flex-shrink: 1;

  .job-logo img {
    width: 120px;
    height: 100px;
  }

  .job-info,
  .job-description,
  .job-title {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  .job-info {
    gap: 1em;
  }

  .job-location {
    margin-left: 1em;
  }

  .job-type {
    background-color: #a67117;
    padding: 0.2em;
    color: #fff;
  }
`;
