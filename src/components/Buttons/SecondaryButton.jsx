import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import secondaryButton from "../../assets/svg/secondaryButton.svg";

const SecondaryButton = ({ label }) => {
  return (
    <Button
      variant="contained"
      sx={{
        position: "relative",
        backgroundColor: "transparent",
        // backgroundImage: `url(${secondaryButton})`,
        // backgroundPosition: "center",
        // backgroundSize: "contain",
        borderRadius: 1.5,
        p: 2,
        fontSize: "1.6rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}>
      <img
        src={secondaryButton}
        alt="secondary Button"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      />
      <Typography sx={{ opacity: 1, position: "relative", zIndex: 5, color: "common.white", textTransform: "none" }}>
        {label}
      </Typography>
    </Button>
  );
};

export default SecondaryButton;
