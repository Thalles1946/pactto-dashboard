import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import "./index.css";

export default function Packages() {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Button
        variant="contained"
        sx={{
          width: "14%",
          borderRadius: "40px",
          padding: "16px 32px",
          backgroundColor: "#1dbba5",
          margin: "0px 24px 24px",
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
          + ADD PACKAGE
        </Typography>
      </Button>
      <div className="container-package">
        <div className="options-package">
          <div className="describe">
            <Typography
              fontFamily="Roboto"
              fontSize="14px"
              fontWeight={600}
              sx={{ margin: "0px 0px 25px" }}
            >
              1. Describe your package
              <Divider
                color="#1dbba5"
                sx={{
                  height: "1.2px",
                }}
              />
            </Typography>
            <Typography
              fontFamily="Roboto"
              fontSize="14px"
              sx={{
                color: "#E3E3E3",
                opacity: "0.8",
                margin: "-10px 0px 10px",
              }}
            >
              Users will see this info on your expert page or in your
              integrations,{" "}
              <a href="/#" style={{ color: "#1dbba5" }}>
                view example.
              </a>
            </Typography>
            <TextField
              className="package-name-field"
              placeholder="Title"
              label="Package name"
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
              className="package-description-field"
              placeholder="Add description to this package"
              rows={4}
              multiline
              label="Package description"
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
              className="package-details-field"
              label="Package details (user will view only)"
              placeholder="Add details"
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
              className="package-instructions-field"
              label="Package instructions (customers will view too)"
              placeholder="Add instructions"
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
          <div className="requirements">
            <Typography
              fontFamily="Roboto"
              fontSize="14px"
              fontWeight={600}
              sx={{ margin: "0px 0px 25px" }}
            >
              2. Define requirements for your package
              <Divider
                sx={{
                  height: "1.2px",
                }}
                color="#1dbba5"
              />
            </Typography>
            <Typography
              fontFamily="Roboto"
              fontSize="14px"
              sx={{ color: "#E3E3E3", opacity: "0.8" }}
            >
              Users will be able to upload items for you to review. The items
              can be files, links or combinations.
            </Typography>
            <div>
              <Typography
                sx={{
                  margin: "0px 0px 8px",
                  font: "14px Roboto",
                  display: "flex",
                  fontWeight: 600,
                }}
              >
                Review settings
              </Typography>
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <FormControlLabel
                  componentsProps={{
                    typography: {
                      sx: {
                        font: "14px Roboto",
                      },
                    },
                  }}
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
                  label="Single file review (e.g. video, image, or PDF)"
                />
                <FormControlLabel
                  componentsProps={{
                    typography: {
                      sx: {
                        font: "14px Roboto",
                      },
                    },
                  }}
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
                  label="Single link review (e.g. LinkedIn URL, portfolio)"
                />
                <FormControlLabel
                  componentsProps={{
                    typography: {
                      sx: {
                        font: "14px Roboto",
                      },
                    },
                  }}
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
                  label="Single review of multiple files (e.g. 2 videos and 1 image, reviewed together)"
                />
              </FormGroup>
            </div>
            <div>
              <Typography
                sx={{
                  margin: "0px 0px 8px",
                  font: "14px Roboto",
                  display: "flex",
                  fontWeight: 600,
                }}
              >
                Review file type
              </Typography>
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <FormControlLabel
                  componentsProps={{
                    typography: {
                      sx: {
                        font: "14px Roboto",
                      },
                    },
                  }}
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
                  label="Video"
                />
                <FormControlLabel
                  componentsProps={{
                    typography: {
                      sx: {
                        font: "14px Roboto",
                      },
                    },
                  }}
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
                  label="Image"
                />
                <FormControlLabel
                  componentsProps={{
                    typography: {
                      sx: {
                        font: "14px Roboto",
                      },
                    },
                  }}
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
                  label="File (PDF, txt, etc)"
                />
              </FormGroup>
            </div>
            <div
              style={{ display: "flex", gap: "5px", flexDirection: "column" }}
            >
              <Typography
                fontFamily="Roboto"
                fontSize="14px"
                sx={{ color: "#e3e3e3", textAlign: "left", fontWeight: 600 }}
              >
                Options for the user to select (tags)
              </Typography>
              <Typography
                fontFamily="Roboto"
                fontSize="12px"
                sx={{ color: "#e3e3e3", textAlign: "left" }}
              >
                The user will be able to select these options when purchasing
                the package. They will become tags in your dashboard.
              </Typography>
              <TextField
                className="package-description-field"
                label="Add option"
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
          </div>
          <div className="cost">
            <Typography
              fontFamily="Roboto"
              fontWeight={600}
              fontSize="14px"
              sx={{ margin: "0px 0px 25px" }}
            >
              3. Define its cost and number of reviews
              <Divider
                sx={{
                  height: "1.2px",
                }}
                color="#1dbba5"
              />
            </Typography>
            <Typography
              fontFamily="Roboto"
              fontSize="14px"
              sx={{ color: "#E3E3E3", opacity: "0.8" }}
            >
              Users will upload their items for you to review, and they pay your
              review fee.
            </Typography>
            <FormControl
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",

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
              <Typography
                style={{
                  color: "white",
                }}
                id="demo-simple-select-helper-label"
              >
                Currency
              </Typography>

              <Select
                sx={{
                  width: "40%",
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      backgroundColor: "#424242",
                      color: "#FFFFFF",
                      maxHeight: "35%",
                    },
                  },
                }}
                inputProps={{
                  style: {
                    color: "#FFFFFF",
                  },
                }}
                defaultValue="USD"
              >
                <MenuItem
                  sx={{ width: "100%", backgroundColor: "#424242" }}
                  value="USD"
                >
                  USD
                </MenuItem>
                <MenuItem
                  sx={{ width: "100%", backgroundColor: "#424242" }}
                  value="BRL"
                >
                  BRL
                </MenuItem>
              </Select>
            </FormControl>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography fontFamily="Roboto" fontSize="14px" fontWeight={600}>
                Package cost
              </Typography>
              <TextField
                className="price-field"
                label="Price"
                placeholder="$100.00"
                type="number"
                variant="outlined"
                defaultValue={25}
                fullWidth
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
                sx={{
                  width: "40%",
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
            <Typography
              fontFamily="Roboto"
              fontSize="14px"
              sx={{
                color: "#E3E3E3",
                marginTop: "20px",
              }}
            >
              This package can result in one single review, or it can be a
              specific number of reviews to be consumed as credits.
            </Typography>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{ textAlign: "left" }}
                fontFamily="Roboto"
                fontSize="14px"
                fontWeight={600}
              >
                Number of reviews (credits) in this package
              </Typography>
              <TextField
                className="price-field"
                type="number"
                variant="outlined"
                defaultValue={1}
                fullWidth
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
                sx={{
                  width: "40%",
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
            <Typography fontFamily="Roboto" fontSize="14px">
              Users can see and buy your package when it’s published.
            </Typography>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            margin: "30px 0px 0px",
            justifyContent: "space-around",
          }}
        >
          <Button
            variant="contained"
            sx={{
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
              DELETE PACKAGE
            </Typography>
          </Button>
          <Button
            variant="contained"
            sx={{
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
              SAVE CHANGES
            </Typography>
          </Button>
          <Button
            variant="contained"
            sx={{
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
              SAVE AND PUBLISH PACKAGE
            </Typography>
          </Button>
          <Button
            variant="contained"
            sx={{
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
              PAYMENT DETAILS
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}
