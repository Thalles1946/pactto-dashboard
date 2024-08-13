import { Button, Chip, Fab, TextField, Typography } from "@mui/material";
import React from "react";
import "./index.css";
import { AccountCircle, Add } from "@mui/icons-material";

export default function Personal() {
  const [expertise, setExpertise] = React.useState([]);
  const [newExpertise, setNewExpertise] = React.useState("");
  const [awards, setAwards] = React.useState([]);
  const [newAward, setNewAward] = React.useState("");

  function handleClickRemoveAward(removeIndex) {
    let newArr = [];

    for (let index = 0; index < awards.length; index++) {
      if (index !== removeIndex) newArr.push(awards[index]);
    }
    setAwards(newArr);
  }

  function handleClickAddAward() {
    let newArr = awards;
    newArr.push(newAward);
    setNewAward("");

    setAwards(newArr);
  }

  function handleClickRemoveExpertise(removeIndex) {
    let newArr = [];

    for (let index = 0; index < expertise.length; index++) {
      if (index !== removeIndex) newArr.push(expertise[index]);
    }
    setExpertise(newArr);
  }

  function handleClickAddExpertise() {
    let newArr = expertise;
    newArr.push(newExpertise);
    setNewExpertise("");

    setExpertise(newArr);
  }

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
            <Typography
              sx={{ font: "16px Roboto", margin: "32px 0px", display: "flex" }}
            >
              Carousel
            </Typography>
            <Button
              variant="contained"
              sx={{
                width: "30%",
                borderRadius: "40px",
                padding: "16px 32px",
                margin: "2px",
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
              inputProps={{
                className: "input-props",
              }}
            />
            <div className="field-tags-add">
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
                inputProps={{
                  className: "input-props",
                }}
                value={newExpertise}
                onChange={(e) => setNewExpertise(e.target.value)}
              />
              <Fab
                disabled={newExpertise.length === 0}
                sx={{
                  margin: "8px",
                  width: "11%",
                  backgroundColor: "#1dbba5",
                  "&:hover": {
                    backgroundColor: "#1bac98",
                  },
                }}
                onClick={() => handleClickAddExpertise()}
              >
                <Add />
              </Fab>
            </div>
            <div className="tags">
              {expertise.map((data, index) => (
                <Chip
                  label={data}
                  sx={{
                    backgroundColor: "#1bac98",
                  }}
                  onDelete={() => handleClickRemoveExpertise(index)}
                />
              ))}
            </div>
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
              inputProps={{
                className: "input-props",
              }}
            />
            <div className="field-tags-add">
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
                inputProps={{
                  className: "input-props",
                }}
                value={newAward}
                onChange={(e) => setNewAward(e.target.value)}
              />
              <Fab
                disabled={newAward.length === 0}
                sx={{
                  margin: "8px",
                  width: "11%",
                  backgroundColor: "#1dbba5",
                  "&:hover": {
                    backgroundColor: "#1bac98",
                  },
                }}
                onClick={() => handleClickAddAward()}
              >
                <Add />
              </Fab>
            </div>
            <div className="tags">
              {awards.map((data, index) => (
                <Chip
                  label={data}
                  sx={{
                    backgroundColor: "#1bac98",
                  }}
                  onDelete={() => handleClickRemoveAward(index)}
                />
              ))}
            </div>
            <Typography
              sx={{
                margin: "32px 0px 8px",
                font: "16px Roboto",
                display: "flex",
              }}
            >
              Give me a follow
            </Typography>
            <TextField
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
              sx={{
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
              fullWidth
              label="Add social media channel"
              variant="outlined"
            />
            <Typography
              sx={{
                margin: "32px 0px 8px",
                font: "16px Roboto",
                display: "flex",
              }}
            >
              YouTube video
            </Typography>
            <TextField
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
              sx={{
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
              fullWidth
              label="Youtube video URL"
              variant="outlined"
            />

            <Typography
              sx={{
                margin: "32px 0px 8px",
                font: "16px Roboto",
                display: "flex",
              }}
            >
              Footer
            </Typography>

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
