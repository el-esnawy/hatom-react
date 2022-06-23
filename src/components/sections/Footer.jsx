import { Divider, Grid, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import SecondaryButton from "../Buttons/SecondaryButton";
import logo from "../../assets/svg/logo.svg";

const Footer = () => {
  return (
    <Box sx={{ background: "#031222", pt: "100px", pb: "50px", pl: "61px" }}>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between">
          <Grid item>
            <img src={logo} alt="logo" />
          </Grid>

          <Grid item>
            <Stack spacing={"12px"}>
              <Typography variant="body1" sx={{ color: "common.white" }}>
                Protcol
              </Typography>
              <Typography variant="body1" sx={{ color: "#8493B5" }}>
                Markets
              </Typography>
              <Typography variant="body1" sx={{ color: "#8493B5" }}>
                Prices
              </Typography>
              <Typography variant="body1" sx={{ color: "#8493B5" }}>
                Docs
              </Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Stack spacing={"12px"}>
              <Typography variant="body1" sx={{ color: "common.white" }}>
                Governance
              </Typography>
              <Typography variant="body1" sx={{ color: "#8493B5" }}>
                Overview
              </Typography>
              <Typography variant="body1" sx={{ color: "#8493B5" }}>
                Hatom token
              </Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Stack spacing={"12px"}>
              <Typography variant="body1" sx={{ color: "common.white" }}>
                Security
              </Typography>
              <Typography variant="body1" sx={{ color: "#8493B5" }}>
                Audits
              </Typography>
              <Typography variant="body1" sx={{ color: "#8493B5" }}>
                Formal Verifications
              </Typography>
              <Typography variant="body1" sx={{ color: "#8493B5" }}>
                Economic Secuirty
              </Typography>
              <Typography variant="body1" sx={{ color: "#8493B5" }}>
                Bug Bounty
              </Typography>
            </Stack>
          </Grid>
          <Grid item>
            <SecondaryButton label="App" />
          </Grid>
        </Grid>
        <Typography variant="body1" sx={{ color: "#8493B5" }}>
          © 2022 Hatom ,LLC.
        </Typography>
        <Divider orientation="horizontal" variant="fullWidth" light sx={{ background: "#0F2945" }} />
      </Container>
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: "27px" }}>
        <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#00D395" }}></div>
        <Typography variant="body1" sx={{ color: "#8493B5", fontSize: "1.2rem" }}>
          Latest Block: 14296113
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
