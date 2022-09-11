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
  width: 70%;
  /* height: 2em; */
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    width: auto;
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 2em;
  @media (max-width: 600px) {
    /* display: none; */
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
