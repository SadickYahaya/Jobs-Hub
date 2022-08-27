import styled from "styled-components";

export const HeaderStyles = styled.header`
  height: auto;
  background-color: #f3f3f3;
  margin-top: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  @media (max-width: 600px) {
    width: 100%
  }
`;

export const Nav = styled.div`
  width: 70%;
  /* height: 2em; */
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    width: auto
  }
`;

export const Search = styled.div`
  margin-bottom: 2em;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Stack = styled.div``;
