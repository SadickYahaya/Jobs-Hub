import React from "react";
import { HeaderStyles, Nav, Search } from "./Header.styles";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import FindJobButton from "../../Utils/Button";

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
          <Stack spacing={1} direction="row">
            <TextField
              sx={{
                width: 415,
              }}
              InputProps={{ sx: { height: 40 } }}
              placeholder="job titles, keywords or company"
            />
            <TextField
              sx={{
                width: 415,
              }}
              InputProps={{ sx: { height: 40 } }}
              placeholder="city, state or zip code"
            />
            <FindJobButton />
          </Stack>
        </Search>
      </HeaderStyles>
    </>
  );
};

export default Header;
