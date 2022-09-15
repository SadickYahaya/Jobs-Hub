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
    margin-bottom: 1em;
  }
`;

export const JobDetail = styled.div`
  font-family: "Inter";
  display: flex;
  flex-direction: column;
  padding: 1em;

  .job-info-container,
  .type {
    display: flex;
    gap: 1em;
  }

  .type {
    flex-direction: column;
    align-items: flex-start;
  }

  .job-info-container {
    flex-direction: column;
  }

  .job-info,
  .job-title {
    display: flex;
    gap: 1em;
    flex-direction: column;
  }

  .job-info {
    flex-direction: row;
    justify-content: space-between;
    width: auto;
  }

  .dot {
    height: 5px;
    width: 5px;
  }

  .title {
    font-size: 26px;
    font-weight: 700;
  }

  .location {
    display: flex;
    align-items: center;
    opacity: 0.8;
    gap: 0.5em;
  }

  .job-type {
    background-color: #a67117;
    padding: 0.31em;
    color: #fff;
    border-radius: 5px;
  }

  .job-description span {
    text-align: justify;
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 500;
  }

  .apply-now {
    align-self: center;
  }

  .apply-now a {
    text-decoration: none;
    background-color: #0069d9;
    color: #fff;
    font-weight: 700;
    padding: 7px;
    border-radius: 5px;
  }

  .details-type {
    font-size: 14px;
  }

  .details-jobType {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  .type,
  .contract-type {
    padding: 1em;
    border-radius: 5px;
    text-transform: capitalize;
    font-size: 12px;
    font-weight: 700;
    width: fit-content;
  }

  .type-full {
    background-color: rgba(51, 214, 159, 0.1);
    color: #33d69f;
  }

  .type-part {
    background-color: rgba(55, 59, 83, 0.1);
    color: #8f3d29;
  }

  .contract-type {
    background-color: rgba(69, 214, 247, 0.2);
    color: #45d6f7;
  }

  .job-logo {
    color: #d54d7b;
    font-family: "Great Vibes", cursive;
    font-size: 30px;
    font-weight: normal;
    text-align: center;
    text-shadow: 0 1px 1px #fff;
  }
`;
