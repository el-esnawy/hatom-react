import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SecondaryButton = ({ label }) => {
  return (
    <Box
      sx={{
        p: "2px",
        background: "linear-gradient( 105deg , rgba(53,85,247,0.8)  , rgba(0,77,0,0.8) 50%)",
        borderRadius: "4px",
        opacity: 0.8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Button
        variant="contained"
        sx={{
          borderImageSlice: "1",
          opacity: 0.8,
          borderWidth: "3px",
          borderImageSource: "linear-gradient( 105deg , rgba(53,85,247,0.8)  , rgba(0,77,0,0.8) 50%)",
          background: "linear-gradient(to bottom right,  rgba(0,77,0,0.33) , rgba(1,48,30,0.33) )",
          width: "100%",
          height: "100%",
        }}>
        <Typography sx={{ opacity: 1, position: "relative", zIndex: 5, color: "common.white", textTransform: "none" }}>
          {label}
        </Typography>
      </Button>
    </Box>
  );
};

export default SecondaryButton;
