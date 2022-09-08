import React from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
// import FormControl from "@mui/material/FormControl";
// import { Form } from "react-bootstrap";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import BusinessCenterTwoToneIcon from "@mui/icons-material/BusinessCenterTwoTone";
import LocationIcon from "@mui/icons-material/GpsFixed";
import { HeaderStyles, Nav, Search } from "./Header.styles";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Stack from "@mui/material/Stack";

const Header = ({ params, onParamChange }) => {
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
                flexDirection: {
                  xs: "column",
                  sm: "row",
                  md: "row",
                  lg: "row",
                },
                borderBottom: "none",
                outline: "none",
              }}
            >
              <IconButton
                sx={{
                  p: "5px",
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block",
                    lg: "block",
                  },
                }}
                aria-label="menu"
              >
                <BusinessCenterTwoToneIcon fontSize="small" />
              </IconButton>
              <TextField
                name="what"
                variant="standard"
                sx={{ ml: 1, flex: 1 }}
                placeholder="jobs, titles or company"
                inputProps={{ "aria-label": "enter job, title or company" }}
                onChange={onParamChange}
                value={params.what}
                InputProps={{
                  disableUnderline: true, // <== added this
                }}
              />

              <Divider
                sx={{
                  height: 28,
                  m: 0.5,
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block",
                    lg: "block",
                  },
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
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block",
                    lg: "block",
                  },
                }}
                aria-label="search"
              >
                <LocationIcon fontSize="small" />
              </IconButton>
              <TextField
                name="where"
                variant="standard"
                sx={{
                  ml: 1,
                  flex: 1,
                  border: "none",
                  outline: "none !important",
                }}
                placeholder="city, state or zip code"
                inputProps={{ "aria-label": "enter city, state or country" }}
                onChange={onParamChange}
                value={params.where}
                InputProps={{
                  disableUnderline: true, // <== added this
                }}
              />
            </Paper>
          </Stack>
          {/* <FormControl className="checkbox">
            <Form.Check
              onChange={onParamChange}
              value={params.full_time=1}
              name="full_time"
              id="full-time"
              label="Full Time"
              type="switch"
              className="fulltime"
            />
          </FormControl> */}
        </Search>
      </HeaderStyles>
    </>
  );
};

export default Header;
