import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DownIcon from "@mui/icons-material/KeyboardArrowDown";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CheckBoxContainer } from "./styles";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#0069d9",
    },
  },
});

const Checkboxes = ({ params, onParamChange }) => {
  const [show, setShow] = useState(false);
  const [icon, setIcon] = useState(false);

  const handleDropdown = () => {
    setShow((prev) => !prev);
    setIcon(!icon);
  };
  return (
    <CheckBoxContainer>
      <OutsideClickHandler
        onOutsideClick={() => {
          setShow(false);
          setIcon(false);
        }}
      >
        <div className="dropdown">
          <div className="dropdown-heading" onClick={handleDropdown}>
            <span className="filter-text">Locations</span>
            <span className="arrow-icons">
              {icon ? (
                <UpIcon className="up-icon" fontSize="small" />
              ) : (
                <DownIcon className="down-icon" fontSize="small" />
              )}
            </span>
          </div>
          <div className="filter-checkboxes">
            <ThemeProvider theme={theme}>
              {show && (
                <FormGroup className="checkboxes">
                  <FormControlLabel
                    className="checkbox"
                    control={
                      <Checkbox
                        size="small"
                        color="secondary"
                        name="locationName"
                        // checked={filters.includes("newyork")}
                      />
                    }
                    label={
                      <span
                        style={{
                          fontFamily: "Inter",
                          fontWeight: "700",
                          fontSize: "12px",
                        }}
                      >
                        Brighton
                      </span>
                    }
                    value="brighton"
                    id="brighton"
                    onChange={onParamChange}
                  />
                  <FormControlLabel
                    className="checkbox"
                    control={
                      <Checkbox
                        size="small"
                        color="secondary"
                        name="locationName"
                        // checked={filters.includes("nevada")}
                      />
                    }
                    label={
                      <span
                        style={{
                          fontFamily: "Inter",
                          fontWeight: "700",
                          fontSize: "12px",
                        }}
                      >
                        Liverpool
                      </span>
                    }
                    value="liverpool"
                    id="liverpool"
                    onChange={onParamChange}
                  />
                  <FormControlLabel
                    className="checkbox"
                    control={
                      <Checkbox
                        size="small"
                        color="secondary"
                        name="locationName"
                        // checked={filters.includes("yorkshire")}
                      />
                    }
                    label={
                      <span
                        style={{
                          fontFamily: "Inter",
                          fontWeight: "700",
                          fontSize: "12px",
                        }}
                      >
                        Sheffield
                      </span>
                    }
                    value="sheffield"
                    id="sheffield"
                    onChange={onParamChange}
                  />
                  <FormControlLabel
                    className="checkbox"
                    control={
                      <Checkbox
                        size="small"
                        color="secondary"
                        name="locationName"
                        // checked={filters.includes("miami")}
                      />
                    }
                    label={
                      <span
                        style={{
                          fontFamily: "Inter",
                          fontWeight: "700",
                          fontSize: "12px",
                        }}
                      >
                        Manchester
                      </span>
                    }
                    value="manchester"
                    id="manchester"
                    onChange={onParamChange}
                  />
                </FormGroup>
              )}
            </ThemeProvider>
          </div>
        </div>
      </OutsideClickHandler>
    </CheckBoxContainer>
  );
};

export default Checkboxes;
