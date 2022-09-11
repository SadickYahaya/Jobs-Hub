import React, { useState, useEffect } from "react";
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
  const [filters, setFilters] = useState([]);
  const [icon, setIcon] = useState(false);

  const handleFilterChange = (event) => {
    const index = filters.indexOf(event.target.value);
    if (index === -1) {
      setFilters([...filters, event.target.value]);
      console.log([...filters, event.target.value]);
    } else {
      setFilters(filters.filter((filter) => filter !== event.target.value));
    }
  };

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
                        name="newyork"
                        checked={filters.includes("newyork")}
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
                        New York
                      </span>
                    }
                    value="newyork"
                    id="newyork"
                    onChange={handleFilterChange}
                  />
                  <FormControlLabel
                    className="checkbox"
                    control={
                      <Checkbox
                        size="small"
                        color="secondary"
                        name="nevada"
                        checked={filters.includes("nevada")}
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
                        Nevada
                      </span>
                    }
                    value="nevada"
                    id="nevada"
                    onChange={handleFilterChange}
                  />
                  <FormControlLabel
                    className="checkbox"
                    control={
                      <Checkbox
                        size="small"
                        color="secondary"
                        name="yorkshire"
                        checked={filters.includes("yorkshire")}
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
                        Yorkshire
                      </span>
                    }
                    value="yorkshire"
                    id="yorkshire"
                    onChange={handleFilterChange}
                  />
                  <FormControlLabel
                    className="checkbox"
                    control={
                      <Checkbox
                        size="small"
                        color="secondary"
                        name="miami"
                        checked={filters.includes("miami")}
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
                        Miami
                      </span>
                    }
                    value="miami"
                    id="miami"
                    onChange={handleFilterChange}
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
