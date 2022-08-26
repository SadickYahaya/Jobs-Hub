import styled from "styled-components";

export const JobContainer = styled.div`
  height: auto;
  width: auto;
  padding: 1em;
  background-color: #f3f3f3;
  display: flex;
  gap: 1em;
  order: 1;
  flex-grow: 0;

  .job-logo img {
    width: 10.5em;
    height: 10.5em;
  }

  .job-info,
  .job-description,
  .job-title {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    width: auto;
  }

  .job-info {
    gap: 0;
    justify-content: space-between;
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
