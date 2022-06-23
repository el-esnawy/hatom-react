import { Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const Hero = () => {
  return (
    <Stack sx={{ mt: 5, mb: { sm: "70vw", xs: "140vw" } }} direction="column">
      <Box sx={{ position: "relative", display: "flex", justifyContent: "center", mb: { xs: 6, sm: 12 } }}>
        <Typography
          textAlign="center"
          variant="h1"
          sx={{
            letterSpacing: "3px",
            position: "absolute",
            color: "common.white",
            fontWeight: 900,
            background: "linear-gradient(to left , #1B4347 30% , #3D906A )",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(10px 0px #1B4347 )",
            backgroundClip: "text",
          }}>
          Hatom Token
        </Typography>
        <Typography
          textAlign="center"
          variant="h1"
          sx={{
            letterSpacing: "3px",
            position: "absolute",
            color: "common.white",
            fontWeight: 900,
            textShadow: "3px 4px 17px rgba(255,255,255,0.2)",
          }}>
          Hatom Token
        </Typography>
      </Box>
      <Typography variant="h3" sx={{ color: "#367E6B" }} textAlign="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
    </Stack>
  );
};

export default Hero;
