import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Icon,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "./index.css";
import { CheckBox as CheckedIcon } from "@mui/icons-material";

export default function Personal() {
  const [country, setCountry] = React.useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="text-fields">
        <TextField
          className="first-name-field"
          label="First name"
          variant="outlined"
          fullWidth
          InputLabelProps={{
            style: {
              color: "white",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "rgb(255 255 255 / 87%)",
              "& fieldset": {
                borderColor: "#777678",
              },
              "&:hover fieldset": {
                borderColor: "#e2e2e3",
              },
            },
            "&.Mui-focused": {
              color: "rgb(255 255 255 / 87%)",
              "& fieldset": {
                borderColor: "#777678",
              },
              "&:hover fieldset": {
                borderColor: "#e2e2e3",
              },
            },
          }}
          inputProps={{
            className: "input-props",
          }}
        />
        <TextField
          className="last-name-field"
          label="Last name"
          variant="outlined"
          fullWidth
          InputLabelProps={{
            style: {
              color: "white",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "rgb(255 255 255 / 87%)",
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
        />

        <TextField
          fullWidth
          className="email-field"
          label="Email"
          variant="outlined"
          InputLabelProps={{
            style: {
              color: "white",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
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
        />
        <FormControl
          sx={{
            minWidth: 120,
            "& .MuiOutlinedInput-root": {
              color: "rgb(255 255 255 / 87%)",
              "& fieldset": {
                borderColor: "#777678",
              },
              "&:hover fieldset": {
                borderColor: "#e2e2e3",
              },
            },
            "&:focus": {
              borderColor: "#1bac98",
            },
          }}
          fullWidth
        >
          <InputLabel
            style={{
              color: "white",
            }}
            id="demo-simple-select-helper-label"
          >
            Country
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={country}
            label="Country"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          {/* <FormHelperText>With label + helper text</FormHelperText> */}
        </FormControl>
      </div>
      <div className="main-activities">
        <Typography sx={{ margin: "32px 0px 8px", font: "16px Roboto" }}>
          What is your main activity? Or activities
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  "& .MuiCheckbox-root": {
                    color: "red",
                  },
                }}
              />
            }
            label="Video"
          />
          <FormControlLabel
            control={<Checkbox checkedIcon={<CheckedIcon />} />}
            label="Design"
          />
          <FormControlLabel control={<Checkbox />} label="Development" />
          <FormControlLabel control={<Checkbox />} label="Sports" />
          <FormControlLabel control={<Checkbox />} label="Medical" />
          <FormControlLabel control={<Checkbox />} label="Inspections" />
        </FormGroup>
        <TextField
          InputLabelProps={{
            style: {
              color: "white",
            },
          }}
          sx={{
            minWidth: 120,
            "& .MuiOutlinedInput-root": {
              color: "rgb(255 255 255 / 87%)",
              "& fieldset": {
                borderColor: "#777678",
              },
              "&:hover fieldset": {
                borderColor: "#e2e2e3",
              },
            },
            "&:focus": {
              borderColor: "#1bac98",
            },
          }}
          fullWidth
          label="Other"
          variant="outlined"
        />
      </div>
      <div className="user-password">
        <Typography sx={{ margin: "32px 0px 8px", font: "16px Roboto" }}>
          User handle and password
        </Typography>
        <TextField
          InputLabelProps={{
            style: {
              color: "white",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "rgb(255 255 255 / 87%)",
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
          id="outlined-basic"
          label="User name, your Pactto handle (e.g. johnsmith)"
          variant="outlined"
        />
        <TextField
          InputLabelProps={{
            style: {
              color: "white",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "rgb(255 255 255 / 87%)",
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
          type="password"
          label="Password"
          variant="outlined"
        />
        <TextField
          InputLabelProps={{
            style: {
              color: "white",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "rgb(255 255 255 / 87%)",
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
          type="password"
          label="Confirm password"
          variant="outlined"
        />
      </div>

      <div className="buttons">
        <Button
          variant="contained"
          sx={{
            width: "15%",
            borderRadius: "40px",
            padding: "16px 32px",
            backgroundColor: "#b8b8b8",
            lineHeight: "48px",
            ":hover": {
              backgroundColor: "#bebebe",
            },
          }}
          onClick={() =>
            alert(
              "Function still doesn't exist!\nTo implement it, hire the developer 😁"
            )
          }
        >
          <Typography
            sx={{
              color: "#181818",
              font: "14px Roboto, sans-serif",
              fontWeight: 600,
              letterSpacing: "1px",
            }}
          >
            RESET CHANGES
          </Typography>
        </Button>
        <Button
          variant="contained"
          sx={{
            width: "15%",
            borderRadius: "40px",
            padding: "16px 32px",
            backgroundColor: "#1dbba5",
            lineHeight: "48px",
            ":hover": {
              backgroundColor: "#1bac98",
            },
          }}
          onClick={() =>
            alert(
              "Function still doesn't exist!\nTo implement it, hire the developer 😁"
            )
          }
        >
          <Typography
            sx={{
              color: "#181818",
              font: "14px Roboto, sans-serif",
              fontWeight: 600,
              letterSpacing: "1px",
            }}
          >
            SAVE CHANGES
          </Typography>
        </Button>
      </div>
    </div>
  );
}
