import { Button } from "@mui/material";
import React from "react";

const PrimaryButton = ({ children, sx, type, form }) => {
  return (
    <Button
      type={type}
      form={form}
      variant="contained"
      sx={{
        width: "max-content",
        color: "#FFF",
        borderRadius: "4px",
        background: "linear-gradient(90deg,#46a273 -.2% , #46a273 .36% , #133641 100.2%)",
        textTransform: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 4,
        ...sx,
      }}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
