import styled from "styled-components";

export const JobContainer = styled.div`
  width: 83%;
  margin: 0 auto;
  height: auto;
  padding: 1em;
  background-color: #f3f3f3;
  display: flex;
  justify-content: space-between;
  order: 1;
  gap: 1em;
  flex-grow: 0;
  border-radius: 10px;
  @media (max-width: 600px) {
    width: 95vw;
    flex-direction: column;
    gap: 0;
  }

  .job-logo {
    color: #d54d7b;
    font-family: "Great Vibes", cursive;
    font-size: 14px;
    font-weight: 700;
    text-align: end;
    text-shadow: 0 1px 1px #fff;
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

  .description {
    margin-top: 5px;
    opacity: 0.7;
    width: 90%;
    margin-bottom: 0;
  }

  .title {
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }

  .title:hover {
    text-decoration: underline;
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

  .type {
    padding: 0.3em;
    border-radius: 5px;
    text-transform: capitalize;
    font-size: 10px;
    font-weight: 700;
    margin-left: 10px;
  }

  .description span {
    text-align: justify;
    font-family: "Inter", sans-serif;
    font-size: 13px;
    font-weight: 500;
  }

  .type-full {
    background-color: rgba(51, 214, 159, 0.1);
    color: #33d69f;
  }

  .type-part {
    background-color: rgba(55, 59, 83, 0.1);
    color: #8f3d29;
  }

  .button {
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
