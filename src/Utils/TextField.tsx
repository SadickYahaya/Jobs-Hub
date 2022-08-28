import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import BusinessCenterTwoToneIcon from "@mui/icons-material/BusinessCenterTwoTone";
import SearchIcon from "@mui/icons-material/GpsFixed";

// const PaperStyles = styled.div`
//   @media (max-width: 600px) {
//     .paper {
//       flex-direction: column;
//       width: 0;
//     }
//   }
// `;

export default function Inputs() {
  return (
    // <PaperStyles>
    <Paper
      className="paper"
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: { sm: 820, lg: 820 },
        flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
      }}
    >
      <IconButton
        sx={{
          p: "10px",
          display: { xs: "none", sm: "block", md: "block", lg: "block" },
        }}
        aria-label="menu"
      >
        <BusinessCenterTwoToneIcon />
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
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="city, state or zip code"
        inputProps={{ "aria-label": "enter city, state or country" }}
      />
    </Paper>
    // </PaperStyles>
  );
}
