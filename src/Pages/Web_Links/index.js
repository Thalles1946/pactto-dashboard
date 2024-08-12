import React from "react";
import { Fab, InputAdornment, TextField } from "@mui/material";
import "./index.css";
import { Search, Visibility, VisibilityOff } from "@mui/icons-material";

export default function WebLinks() {
  const [visibility, setVisibility] = React.useState(false);

  return (
    <>
      <div className="page-content">
        <TextField
          sx={{
            marginLeft: "26px",
            "& .MuiOutlinedInput-root": {
              color: "#a7a7a8",
              "& fieldset": {
                borderColor: "#777678",
              },
              "&:hover fieldset": {
                borderColor: "#1bac98",
              },
              "&.Mui-focused fieldset": {
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

        <Fab
          sx={{
            margin: "8px",
            backgroundColor: "#1dbba5",
            "&:hover": {
              backgroundColor: "#1bac98",
            },
          }}
          onClick={() => setVisibility(!visibility)}
        >
          {visibility ? <Visibility /> : <VisibilityOff />}
        </Fab>
      </div>
    </>
  );
}
