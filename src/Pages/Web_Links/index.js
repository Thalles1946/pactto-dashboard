import React from "react";
import {
  InputAdornment,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import "./index.css";
import { Search } from "@mui/icons-material";

export default function WebLinks() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <>
      <div className="page-content">
        <TextField
          sx={{
            marginLeft: "26px",
            paddingRight: "26px",
            "& .MuiOutlinedInput-root": {
              color: "#a7a7a8",
              "& fieldset": {
                borderColor: "#777678",
              },
              "&:hover fieldset": {
                borderColor: "#e2e2e3",
              },
              "&:focus fieldset": {
                borderColor: "#1bac98",
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment color="#efeff0" position="end">
                <Search sx={{ color: "#efeff0" }} />
              </InputAdornment>
            ),
          }}
          inputProps={{
            style: {
              color: "#efeff0",
            },
          }}
          placeholder="Search"
          variant="outlined"
          fullWidth
        />

        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          sx={{
            margin: "8px",
          }}
        >
          <ToggleButton value="pub">PUBLIC</ToggleButton>
          <ToggleButton value="priv">PRIVATE</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </>
  );
}
