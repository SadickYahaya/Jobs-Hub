import styled from "styled-components";

export const JobDetailsContainer = styled.div`
  width: 50%;
  margin: 3em auto;
  @media (max-width: 600px) {
    width: 90%;
  }

  .details-section {
    background-color: #f3f3f3;
    height: auto;
    border-radius: 5px;
  }

  .go-back {
    display: flex;
    align-items: center;
    gap: 1em;
    color: #0069d9;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const JobDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;

  .job-info-container,
  .type {
    display: flex;
    gap: 2em;
  }

  .type {
    gap: 1em;
  }

  .job-info,
  .job-title {
    display: flex;
    gap: 1em;
    flex-direction: column;
  }

  .location {
    align-self: center;
  }

  .title {
    font-size: 26px;
    font-weight: 700;
  }

  .logo-container img {
    width: 6.25em;
    height: 6.25em;
  }

  .location {
    display: flex;
    align-items: center;
    opacity: 0.8;
  }

  .job-type {
    background-color: #a67117;
    padding: 0.31em;
    color: #fff;
    border-radius: 5px;
  }
`;
