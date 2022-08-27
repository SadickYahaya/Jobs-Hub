import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import Jobs from "./JobsSection/Jobs";

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 5em; */
`;

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Jobs />
    </Wrapper>
  );
};

export default Home;
