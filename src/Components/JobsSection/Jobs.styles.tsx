import styled from "styled-components";

export const JobsContainer = styled.div`
  width: 70%;
  margin: 3em auto;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 1;
    width: 90%;

    h3 {
      align-self: flex-start;
    }
  }
`;

export const JobsSection = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-gap: 30px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 90%;
    place-content: center;
  }

  .sidebar {
    background-color: #f3f3f3;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    gap: 1em;
    border-radius: 5px;
  }

  .radio-buttons {
    align-self: center;
  }

  .jobs {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;
