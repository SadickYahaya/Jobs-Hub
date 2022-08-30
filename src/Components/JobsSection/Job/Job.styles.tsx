import styled from "styled-components";

export const JobContainer = styled.div`
  width: auto;
  height: auto;
  padding: 1em;
  margin-right: 0.5em;
  background-color: #f3f3f3;
  display: flex;
  justify-content: space-between;
  order: 1;
  gap: 1em;
  flex-grow: 0;
  border-radius: 10px;
  @media (max-width: 600px) {
    width: 100vw;
    flex-direction: column;
    gap: 0;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  .job-logo img {
    width: 4.5em;
    height: 4.5em;
    border-radius: 10px;
  }

  .job-info {
    display: flex;
    justify-content: space-around;
    gap: 1em;
  }

  .job-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.2em;
    @media (max-width: 600px) {
      width: 100%;
      justify-content: flex-start;
    }
  }

  .title {
    font-size: 18px;
    font-weight: 700;
  }

  .company-info span {
    font-size: 12px;
    margin-right: 0.4em;
    color: gray;
  }

  .dot {
    height: 5px;
    width: 5px;
  }

  .job-type {
    display: flex;
    align-items: center;
    gap: 1em;
    @media (max-width: 600px) {
      justify-content: flex-end;
      flex-direction: row;
      .type {
        padding: 0.7em;
      }
    }
  }

  .type {
    padding: 0.3em;
    border-radius: 10px;
  }

  .type-full {
    background-color: rgba(51, 214, 159, 0.1);
    color: #33d69f;
  }

  .type-part {
    background-color: rgba(55, 59, 83, 0.1);
    color: #373b53;
  }

  .view-button {
    max-height: 2em !important;
  }
`;
