import React from "react";
import { HeaderStyles, Nav, Search } from "./Header.styles";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Stack from "@mui/material/Stack";
import DefaultButton from "../../Utils/Button";
import Inputs from "../../Utils/TextField";
import { findJobsButton } from "../../Utils/JobData";

const Header = () => {
  return (
    <>
      <HeaderStyles>
        <Nav>
          <WorkOutlineIcon />
          <h2>
            Jobs <span>Hub</span>
          </h2>
        </Nav>
        <Search>
          <Stack spacing={1} direction={{ xs: "column", sm: "row", lg: "row" }}>
            <Inputs />
            <DefaultButton {...findJobsButton} />
          </Stack>
        </Search>
      </HeaderStyles>
    </>
  );
};

export default Header;
