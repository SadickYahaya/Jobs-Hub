import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import BusinessCenterTwoToneIcon from "@mui/icons-material/BusinessCenterTwoTone";
import SearchIcon from "@mui/icons-material/GpsFixed";

export default function Inputs() {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 820 }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <BusinessCenterTwoToneIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="jobs, titles or company"
        inputProps={{ "aria-label": "enter job, title or company" }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="city, state or zip code"
        inputProps={{ "aria-label": "enter city, state or country" }}
      />
    </Paper>
  );
}
