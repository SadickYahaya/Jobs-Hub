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
  border-radius: 5px;
  @media (max-width: 600px) {
    .description {
      display: none;
    }
  }

  .job-logo img {
    width: 10.5em;
    height: 10.5em;
  }

  .type {
    display: flex;
    gap: 1em;
  }

  .job-info,
  .job-description,
  .job-title {
    display: flex;
    flex-direction: column;
    gap: 0.7em;
    width: auto;
  }

  .title {
    font-size: 18px;
    font-weight: 700;
  }

  .job-info {
    gap: 0;
    justify-content: space-between;
  }

  .location {
    display: flex;
    align-items: center;
    opacity: 0.8;
    font-weight: 500;
  }

  .type-full,
  .type-part {
    padding: 0.31em;
    color: #fff;
    border-radius: 5px;
  }

  .type-full {
    background-color: #a67117;
  }

  .type-part {
    background-color: #d44219;
  }
`;
