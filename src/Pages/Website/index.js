import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import "./index.css";
import {
  AccountCircle,
  Add,
  CheckBox as CheckedIcon,
} from "@mui/icons-material";

export default function Personal() {
  const [country, setCountry] = React.useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <div className="content">
        <div className="images">
          <Typography
            sx={{
              margin: "0px 0px 30px",
              font: "16px Roboto",
              display: "flex",
            }}
          >
            Avatar
          </Typography>
          <div
            style={{
              backgroundColor: "#1c1b1e",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                margin: "5px",
                padding: "5px",
                borderRadius: "4px",
              }}
            >
              <AccountCircle
                sx={{
                  color: "#ffffff",
                  fontSize: "160px",
                }}
              />
              <Typography sx={{ font: "16px Roboto" }}>
                Change avatar
              </Typography>
            </div>
          </div>
          <div className="carousel">
            <Typography sx={{ font: "16px Roboto", margin: "12px 0px" }}>
              Carousel
            </Typography>
            <Button
              variant="contained"
              sx={{
                width: "30%",
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
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div style={{ marginRight: "4px", display: "flex" }}>
                  <Add />
                </div>
                ADD IMAGE
              </Typography>
            </Button>
          </div>
        </div>
        <div className="fields">
          <div className="text-fields">
            <Typography sx={{ margin: "0px 0px 8px", font: "16px Roboto" }}>
              Hero
            </Typography>
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
              className="headline-field"
              label="Headline"
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
          </div>
          <div className="about-me">
            <Typography
              sx={{
                margin: "32px 0px 8px",
                font: "16px Roboto",
                display: "flex",
              }}
            >
              About Me
            </Typography>
            <TextField
              className="about-field"
              label="About me"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
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
              className="expertise-field"
              label="Expertise Title"
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
              className="add-expertise-field"
              label="Add expertise"
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
              className="awards-field"
              label="Awards Title"
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
              className="add-award-field"
              label="Add award"
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
              label="Add social media channel"
              variant="outlined"
            />
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
              label="Youtube video URL"
              variant="outlined"
            />
            <TextField
              className="about-field"
              label="Quote"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
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
              label="Quote author"
              variant="outlined"
            />
          </div>
        </div>
      </div>

      <div className="buttons">
        <Button
          variant="contained"
          sx={{
            width: "30%",
            borderRadius: "40px",
            padding: "16px 32px",
            backgroundColor: "#2B9CFC",
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
            LAUNCH
          </Typography>
        </Button>
        <Button
          variant="contained"
          sx={{
            width: "30%",
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
            SAVE
          </Typography>
        </Button>
      </div>
    </div>
  );
}
