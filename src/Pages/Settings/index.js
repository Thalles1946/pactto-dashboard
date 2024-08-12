import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
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
            width: "8%",
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
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
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
            placeholder="#00FF00"
            variant="outlined"
            label="Color 1"
          />
          <TextField
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
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
            placeholder="#00FF00"
            variant="outlined"
            label="Color 2"
          />
          <TextField
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
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
            placeholder="#00FF00"
            variant="outlined"
            label="Color 3"
          />
          <TextField
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
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
            placeholder="#00FF00"
            variant="outlined"
            label="Color 4"
          />
        </div>
        <Typography
          sx={{
            display: "flex",
          }}
        >
          Devices options
        </Typography>
        <div className="device-selector">
          <FormControl
            sx={{
              maxWidth: "16%",

              minWidth: 120,
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
          >
            <InputLabel
              style={{
                color: "white",
              }}
              id="demo-simple-select-helper-label"
            >
              Camera
            </InputLabel>

            <Select
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "#424242",
                    color: "#FFFFFF",
                    maxHeight: "35%",
                  },
                },
              }}
              label="Camera"
            >
              <MenuItem
                sx={{ width: "100%", backgroundColor: "#424242" }}
                value="camera"
              >
                Integrated Camera (174f:1176)
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              maxWidth: "16%",

              minWidth: 120,
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
          >
            <InputLabel
              style={{
                color: "white",
              }}
              id="demo-simple-select-helper-label"
            >
              Microphone
            </InputLabel>

            <Select
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "#424242",
                    color: "#FFFFFF",
                    maxHeight: "35%",
                  },
                },
              }}
              label="Microphone"
            >
              <MenuItem
                sx={{ width: "100%", backgroundColor: "#424242" }}
                value="prd-mic"
              >
                Padrão - Microfone (Realtek(R) Audio)
              </MenuItem>
              <MenuItem
                sx={{ width: "100%", backgroundColor: "#424242" }}
                value="com-mic"
              >
                Comunicações - Microfone (Realtek(R) Audio)
              </MenuItem>
              <MenuItem
                sx={{ width: "100%", backgroundColor: "#424242" }}
                value="mic-realtek"
              >
                Microfone (Realtek(R) Audio)
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              maxWidth: "16%",

              minWidth: 120,
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
          >
            <InputLabel
              style={{
                color: "white",
              }}
              id="demo-simple-select-helper-label"
            >
              Speakers
            </InputLabel>

            <Select
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "#424242",
                    color: "#FFFFFF",
                    maxHeight: "35%",
                  },
                },
              }}
              label="Speakers"
            >
              <MenuItem
                sx={{ width: "100%", backgroundColor: "#424242" }}
                value="fones-prd"
              >
                Padrão - Fones de ouvido (Realtek(R) Audio)
              </MenuItem>
              <MenuItem
                sx={{ width: "100%", backgroundColor: "#424242" }}
                value="coms"
              >
                Comunicações - Fones de ouvido (Realtek(R) Audio)
              </MenuItem>
              <MenuItem
                sx={{ width: "100%", backgroundColor: "#424242" }}
                value="L22W931"
              >
                1 - L22W931 (AMD High Definition Audio Device)
              </MenuItem>
              <MenuItem
                sx={{ width: "100%", backgroundColor: "#424242" }}
                value="auto-falantes"
              >
                Alto-falantes (Realtek(R) Audio)
              </MenuItem>
              <MenuItem
                sx={{ width: "100%", backgroundColor: "#424242" }}
                value="fones"
              >
                Fones de ouvido (Realtek(R) Audio)
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
