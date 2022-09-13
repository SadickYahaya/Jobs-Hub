import styled from "styled-components";

export const JobsContainer = styled.div`
  width: auto;
  max-width: 60%;
  margin: 3em auto;
  display: flex;
  justify-content: center;
  gap: 1em;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }

  @media (max-width: 1024px) {
    align-items: center;
    width: 80%;
    max-width: 100%;
  }
`;

export const JobsSection = styled.div`
  display: grid;
  width: auto;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  place-content: center;
  @media (max-width: 600px) {
    width: 100%;
    place-content: center;

    .job-length {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    place-content: center;
  }

  .pagination {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 4px;
  }

  .error {
    color: red;
    font-weight: bold;
    font-size: 12px;
  }

  h4 {
    margin: 0;
    margin-bottom: 2px;
  }

  .top-bar {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    @media (max-width: 600px) {
      justify-content: flex-start;
      flex-direction: row;
    }
  }

  .job-select {
    display: flex;
  }

  .error-message {
    justify-self: flex-end;
  }

  .job-length,
  .job-locations {
    font-weight: 700;
    margin-bottom: 0px;
  }

  .job-length {
    margin-right: 5px;
  }

  .jobs {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: auto;
    @media (max-width: 600px) {
      height: 100vh;
      width: 90%;
    }
  }
`;
