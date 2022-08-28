import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import Jobs from "./JobsSection/Jobs";
// import loginButton from "../Assets/loginButton.png";

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 5em; */
`;

// const LoginButton = styled.button`
//   display: grid;
//   place-content: center;
// `;

const Home = () => {
  return (
    <Wrapper>
      {/* <LoginButton>
        <img src={loginButton} alt="" />
      </LoginButton> */}

      <Header />
      <Jobs />
    </Wrapper>
  );
};

export default Home;
