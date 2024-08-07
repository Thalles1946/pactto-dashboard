import { Button, TextField, Typography } from "@mui/material";
import Header from "../../Header/Header";
import "./index.css";
import { Add } from "@mui/icons-material";
export default function Home({ drawerController }) {
  return (
    <>
      {/* <Header changeDrawerState={drawerController} /> */}

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
          inputProps={{
            style: {
              color: "#efeff0",
            },
          }}
          placeholder="Search"
          variant="outlined"
          fullWidth
        />

        <Button
          variant="contained"
          sx={{
            display: "flex",
            width: "20%",
            height: "20%",
            height: "48px",
            borderRadius: "40px",
            color: "#232225",
            margin: "4px 12px 4px 0px",
            backgroundColor: "#1dbba5",
            lineHeight: "48px",
            ":hover": {
              backgroundColor: "#1bac98",
            },
          }}
        >
          <div style={{ marginRight: "4px", display: "flex" }}>
            <Add />
          </div>

          <Typography
            sx={{
              font: "14px Roboto, sans-serif",
              fontWeight: 600,
              letterSpacing: "1px",
            }}
          >
            UPLOAD NEW VIDEO
          </Typography>
        </Button>
      </div>
    </>
  );
}
