import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const PrimaryButton = ({ children, sx, type, form }) => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Button
        type={type}
        form={form}
        variant="contained"
        sx={{
          width: "max-content",
          px: "12px !important",
          py: "10px",
          borderRadius: "4px",
          background: "linear-gradient(to left, #133641, #46A273 )",
          textTransform: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "common.white",
          fontWeight: "normal",
          gap: 1,
          ...sx,
        }}>
        {children}
      </Button>
    </Stack>
  );
};

export default PrimaryButton;
