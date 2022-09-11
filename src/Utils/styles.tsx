import styled from "styled-components";

export const CheckBoxContainer = styled.div`
  .checkboxes {
    flex-direction: column;
    position: absolute;
    background-color: rgb(255, 255, 255);
    padding: 0.5em 2em;
    border-radius: 5px;
    margin-left: 10px;
    margin-top: 5px;
    border: 1px solid #9aaabb;
    box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
    z-index: 2;
  }

  .checkbox {
    color: #1e2139;
  }

  .dropdown-heading {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }

  .arrow-icons {
    width: 20px;
    height: 14px;
  }

  .up-icon,
  .down-icon {
    fill: #000;
    margin-top: -1px;
    margin-left: 0px;
  }

  .filter-text {
    font-family: "Inter";
    font-weight: 700;
  }
`;
