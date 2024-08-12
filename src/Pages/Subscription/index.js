import { Check } from "@mui/icons-material";
import "./index.css";

import { Button, Typography } from "@mui/material";

export default function Subscription() {
  return (
    <div style={{ width: "100%" }}>
      <div className="sub-content">
        <div className="sub-status">
          <Typography sx={{ display: "flex", color: "#6e6e6e" }}>
            You have access to&nbsp;
            <Typography sx={{ color: "#FFFFFF" }}>PACTTO PRO</Typography>
            &nbsp;as a trial.
          </Typography>
          <Typography>&nbsp;3 days left</Typography>
        </div>
        <Button
          variant="contained"
          sx={{
            margin: "20px 0px",
            width: "25%",
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
            SUBSCRIBE TO PACTTO PRO
          </Typography>
        </Button>
        <Typography
          fontFamily="Roboto"
          fontSize="14px"
          sx={{ color: "#E2E2E2", display: "flex" }}
        >
          The PACTTO PRO subscription allows you to:
        </Typography>
        <ul>
          <li>
            <Check sx={{ color: "#1dbba5" }} />
            <Typography
              fontFamily="Roboto"
              fontSize="14px"
              sx={{ color: "#E2E2E2" }}
            >
              Every feature on the FREE plan
            </Typography>
          </li>
          <li>
            <Check sx={{ color: "#1dbba5" }} />
            <Typography
              fontFamily="Roboto"
              fontSize="14px"
              sx={{ color: "#E2E2E2" }}
            >
              Full access to the Pactto app on iPhones, iPads, Android, Mac,
              Windows, and Web
            </Typography>
          </li>
          <li>
            <Check sx={{ color: "#1dbba5" }} />

            <Typography
              fontFamily="Roboto"
              fontSize="14px"
              sx={{ color: "#E2E2E2" }}
            >
              Max screen recording duration on Pactto Desktop:{" "}
              <strong>UNLIMITED</strong>
            </Typography>
          </li>
          <li>
            <Check sx={{ color: "#1dbba5" }} />

            <Typography
              fontFamily="Roboto"
              fontSize="14px"
              sx={{ color: "#E2E2E2" }}
            >
              Max review duration on mobile: <strong>UNLIMITED</strong>
            </Typography>
          </li>
          <li>
            <Check sx={{ color: "#1dbba5" }} />
            <Typography
              fontFamily="Roboto"
              fontSize="14px"
              sx={{ color: "#E2E2E2" }}
            >
              Max review duration on Pactto Web: 12 minutes
            </Typography>
          </li>
          <li>
            <Check sx={{ color: "#1dbba5" }} />
            <Typography
              fontFamily="Roboto"
              fontSize="14px"
              sx={{ color: "#E2E2E2" }}
            >
              Max review duration on Pactto Desktop: 20 minutes
            </Typography>
          </li>
          <li>
            <Check sx={{ color: "#1dbba5" }} />

            <Typography
              fontFamily="Roboto"
              fontSize="14px"
              sx={{ color: "#E2E2E2" }}
            >
              Manage and use your reference video library on the Web and Desktop
            </Typography>
          </li>
          <li>
            <Check sx={{ color: "#1dbba5" }} />

            <Typography
              fontFamily="Roboto"
              fontSize="14px"
              sx={{ color: "#E2E2E2" }}
            >
              Review videos uploaded by you, using the browser
            </Typography>
          </li>
          <li>
            <Check sx={{ color: "#1dbba5" }} />

            <Typography
              fontFamily="Roboto"
              fontSize="14px"
              sx={{ color: "#E2E2E2" }}
            >
              Add your own logo to create branded reviews
            </Typography>
          </li>
          <li>
            <Check sx={{ color: "#1dbba5" }} />

            <Typography
              fontFamily="Roboto"
              fontSize="14px"
              sx={{ color: "#E2E2E2" }}
            >
              If you sell reviews, the Pactto take rate for paid reviews is 3%,
              instead of 12% for free users
            </Typography>
          </li>
          <li>
            <Check sx={{ color: "#1dbba5" }} />

            <Typography
              fontFamily="Roboto"
              fontSize="14px"
              sx={{ color: "#E2E2E2" }}
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://pactto.mintlify.app/introduction"
                class="link"
                style={{
                  color: "#E2E2E2",
                }}
              >
                Integrate Pactto to your website
              </a>
              &nbsp;so anyone can send, and pay, for your video feedback
            </Typography>
          </li>
          <li>
            <Check sx={{ color: "#1dbba5" }} />
            <Typography
              fontFamily="Roboto"
              fontSize="14px"
              sx={{ color: "#E2E2E2" }}
            >
              Share your videos with others (no more sending video files around)
            </Typography>
          </li>
        </ul>
      </div>
    </div>
  );
}
