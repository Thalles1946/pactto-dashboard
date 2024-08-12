import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "./index.css";

export default function Personal() {
  const [country, setCountry] = React.useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const countries = [
    "Afeghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "United States",
  ];

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
        <FormControl
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
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: "#424242",
                  color: "#FFFFFF",
                  maxHeight: "35%",
                },
              },
            }}
            value={country}
            label="Country"
            onChange={handleChange}
          >
            {countries.map((data) => (
              <MenuItem
                sx={{ width: "100%", backgroundColor: "#424242" }}
                value={data}
              >
                {data}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="main-activities">
        <Typography
          sx={{ margin: "32px 0px 8px", font: "16px Roboto", display: "flex" }}
        >
          What is your main activity? Or activities
        </Typography>
        <FormGroup
          sx={{
            margin: "10px",
          }}
        >
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
            label="Video"
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
            label="Design"
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
            label="Development"
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
            label="Sports"
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
            label="Medical"
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
            label="Inspections"
          />
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
          label="Other"
          variant="outlined"
        />
      </div>
      <div className="user-password">
        <Typography
          sx={{ margin: "32px 0px 8px", font: "16px Roboto", display: "flex" }}
        >
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
      <Typography
        sx={{
          font: "13px Roboto",
          margin: "8px 0px 32px",
          opacity: 0.8,
        }}
      >
        To delete your Pactto account and remove your data permanently from all
        Pactto apps and services, please{" "}
        <u
          onClick={() =>
            alert(
              "Function still doesn't exist!\nTo implement it, hire the developer 😁"
            )
          }
          style={{
            cursor: "pointer",
          }}
        >
          click here.
        </u>
      </Typography>
    </div>
  );
}
