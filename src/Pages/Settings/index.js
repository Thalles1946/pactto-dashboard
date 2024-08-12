import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import "./index.css";
import { Circle, Search } from "@mui/icons-material";
import React from "react";

export default function Settings() {
  const [colors, setColors] = React.useState({
    color0: "#008000",
    color1: "#FF0000",
    color2: "#FFFFFF",
    color3: "#000000",
  });

  return (
    <div className="settings-container">
      <div className="options-checkbox">
        <Typography
          sx={{ margin: "0px 0px 8px", font: "16px Roboto", display: "flex" }}
        >
          Review settings
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "#eeeeee",
                  "&.Mui-checked": {
                    color: "#1dbba5",
                  },
                }}
              />
            }
            label="Show logo"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "#eeeeee",
                  "&.Mui-checked": {
                    color: "#1dbba5",
                  },
                }}
              />
            }
            label="Start with microphone enabled"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "#eeeeee",
                  "&.Mui-checked": {
                    color: "#1dbba5",
                  },
                }}
              />
            }
            label="Start with camera enabled"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "#eeeeee",
                  "&.Mui-checked": {
                    color: "#1dbba5",
                  },
                }}
              />
            }
            label="Videos loaded start muted"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "#eeeeee",
                  "&.Mui-checked": {
                    color: "#1dbba5",
                  },
                }}
              />
            }
            label="Notes disappear after 1 second"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "#eeeeee",
                  "&.Mui-checked": {
                    color: "#1dbba5",
                  },
                }}
              />
            }
            label="Trackpad: pinch to zoom"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "#eeeeee",
                  "&.Mui-checked": {
                    color: "#1dbba5",
                  },
                }}
              />
            }
            label="Trackpad: reposition with 2-finger swipe"
          />
        </FormGroup>
      </div>
      <div className="slider">
        <Typography>Brush size for tools</Typography>
        <Slider
          aria-label="Temperature"
          defaultValue={3}
          valueLabelDisplay="auto"
          shiftStep={1}
          step={1}
          min={1}
          max={7}
          sx={{
            color: "#1dbba5",
            width: "10%",
            "& .MuiSlider-valueLabel": {
              backgroundColor: "#1dbba5",
            },
          }}
        />
      </div>
      <div className="colors">
        <Typography
          sx={{
            display: "flex",
          }}
        >
          Note color options
        </Typography>
        <div className="colors-selector">
          <TextField
            sx={{
              width: "10%",

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
            onChange={(e) => {
              setColors((data) => ({ ...data, color0: e.target.value }));
            }}
            value={colors.color0}
            InputProps={{
              endAdornment: (
                <InputAdornment color={colors.color0} position="end">
                  <Circle sx={{ color: colors.color0 }} />
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
            label="Color 1"
          />
          <TextField
            sx={{
              width: "10%",

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
            onChange={(e) => {
              setColors((data) => ({ ...data, color1: e.target.value }));
            }}
            value={colors.color1}
            InputProps={{
              endAdornment: (
                <InputAdornment color={colors.color1} position="end">
                  <Circle sx={{ color: colors.color1 }} />
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
            label="Color 2"
          />
          <TextField
            sx={{
              width: "10%",

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
            onChange={(e) => {
              setColors((data) => ({ ...data, color2: e.target.value }));
            }}
            value={colors.color2}
            InputProps={{
              endAdornment: (
                <InputAdornment color={colors.color2} position="end">
                  <Circle sx={{ color: colors.color2 }} />
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
            label="Color 3"
          />
          <TextField
            sx={{
              width: "10%",

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
            onChange={(e) => {
              setColors((data) => ({ ...data, color3: e.target.value }));
            }}
            value={colors.color3}
            InputProps={{
              endAdornment: (
                <InputAdornment color={colors.color3} position="end">
                  <Circle sx={{ color: colors.color3 }} />
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
            label="Color 4"
          />
        </div>
        <div className="device-selector">
          <TextField
            sx={{
              marginLeft: "26px",

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
            label="Camera"
          />{" "}
          <TextField
            sx={{
              marginLeft: "26px",

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
            label="Microphone"
          />{" "}
          <TextField
            sx={{
              marginLeft: "26px",

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
            label="Speakers"
          />
        </div>
      </div>
    </div>
  );
}
