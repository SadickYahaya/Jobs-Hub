import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import BusinessCenterTwoToneIcon from "@mui/icons-material/BusinessCenterTwoTone";
import LocationIcon from "@mui/icons-material/GpsFixed";
import { HeaderStyles, Nav, Search } from "./Header.styles";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Stack from "@mui/material/Stack";
import DefaultButton from "../../Utils/Button";
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
          <Paper
      className="paper"
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: { sm: 820, lg: 820 },
        height: 40,
        flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
        borderBottom: "none",
        outline: "none",
      }}
    >
      <IconButton
        sx={{
          p: "5px",
          display: { xs: "none", sm: "block", md: "block", lg: "block" },
        }}
        aria-label="menu"
      >
        <BusinessCenterTwoToneIcon fontSize="small" />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="jobs, titles or company"
        inputProps={{ "aria-label": "enter job, title or company" }}
      />

      <Divider
        sx={{
          height: 28,
          m: 0.5,
          display: { xs: "none", sm: "block", md: "block", lg: "block" },
        }}
        orientation="vertical"
      />

      <Divider
        sx={{
          width: 280,
          m: 0.5,
          display: { xs: "block", sm: "none", md: "none", lg: "none" },
        }}
      />

      <IconButton
        type="button"
        sx={{
          p: "10px",
          display: { xs: "none", sm: "block", md: "block", lg: "block" },
        }}
        aria-label="search"
      >
        <LocationIcon fontSize="small" />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="city, state or zip code"
        inputProps={{ "aria-label": "enter city, state or country" }}
      />
    </Paper>
            <DefaultButton {...findJobsButton} />
          </Stack>
        </Search>
      </HeaderStyles>
    </>
  );
};

export default Header;
