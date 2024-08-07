import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import "./index.css";
import { Add, Search } from "@mui/icons-material";

export default function Chats() {
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
      </div>
    </>
  );
}
