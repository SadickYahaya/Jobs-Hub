import styled from "styled-components";

export const HeaderStyles = styled.header`
  height: auto;
  background-color: #f3f3f3;
  margin-top: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  letter-spacing: 1px;
  @media (max-width: 600px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Nav = styled.div`
  width: 61%;
  margin: 1em auto;
  display: flex;
  gap: 2px;
  align-items: center;
  @media (max-width: 600px) {
    width: auto;
  }

  h3 {
    font-weight: 700;
    letter-spacing: 2px;
    justify-self: center;
    margin-bottom: 2px;
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 2em;
  @media (max-width: 600px) {
    gap: 2em;
  }

  @media (max-width: 1024px) {
    width: 80%;
  }

  .checkbox {
    align-self: flex-end;
  }

  .fulltime {
    font-family: "Inter", sans-serif;
  }
`;

export const Stack = styled.div``;
