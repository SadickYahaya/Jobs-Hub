import styled from "styled-components";

export const JobsContainer = styled.div`
  width: 60%;
  margin: 3em auto;
  display: flex;
  justify-content: center;
  gap: 1em;
  @media (max-width: 600px) {
    width: 90%;
  }

  @media (max-width: 1024px) {
    align-items: center;
    flex-shrink: 1;
    width: 90%;

    .sidebar {
      align-self: flex-start;
    }
  }

  .sidebar {
    background-color: #f3f3f3;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    gap: 1em;
    border-radius: 10px;
    width: 20em;
  }

  @media (max-width: 600px) {
    width: 90%;
    .sidebar {
      display: none;
    }
  }

  .radio-buttons {
    align-self: center;
  }
`;

export const JobsSection = styled.div`
  display: grid;
  width: -webkit-fill-available;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  place-content: center;
  @media (max-width: 600px) {
    width: 100%;
    place-content: center;
  }

  .pagination {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 4px;
  }

  h4 {
    margin: 0;
    margin-bottom: 2px;
  }

  .jobs {
    display: flex;
    flex-direction: column;
    gap: 1em;
    overflow-y: scroll;
    width: auto;
  }
`;
