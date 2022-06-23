import { Container, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import lines from "../../assets/svg/lines.svg";

const Features = (props, ref) => {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Container maxWidth="xl" id="feature">
      {/*  DIVIDENDS AND CTA */}
      {!lg && (
        <Grid container alignItems="center" justifyContent="space-between" ref={ref}>
          <Grid item>
            <Stack direction="row" spacing={0.5}>
              <Typography variant="h4" sx={{}}>
                $9,449,627.26
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  display: "inline",
                  color: "primary.main",
                }}>
                Dividends
              </Typography>
            </Stack>
            <Typography
              variant="subtitle1"
              sx={{
                color: "primary.contrastText",
                fontWeight: "normal",
              }}>
              Paid out to Hatom Token Holders over 3 years
            </Typography>
          </Grid>
          <Grid item>
            <PrimaryButton
              sx={{
                borderRadius: "12px",
              }}>
              Buy Hatom Token
            </PrimaryButton>
          </Grid>
        </Grid>
      )}
      {/* SECTION Header */}
      <Stack direction="row" spacing={1} sx={{ mt: "100px" }} justifyContent={{ xs: "center", lg: "" }}>
        <Typography variant="h2" sx={{ color: "#3555F7" }}>
          Features
        </Typography>
        <Typography variant="h2" sx={{}}>
          of Hatom Protocol
        </Typography>
      </Stack>
      {/* FEATURES DESCRIPTION SECTION */}

      <Grid
        container
        rowSpacing={{ xs: 5, lg: 0 }}
        sx={{ mt: { lg: "25px", xs: 0 }, pt: { lg: "25px", xs: 0 } }}
        justifyContent={{ lg: "space-between", xs: "center" }}
        alignItems={{ lg: "start", xs: "center" }}>
        <Grid
          lg={2}
          xs={12}
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: { xs: "center", lg: "" },
            gap: { xs: 5, lg: "100px" },
          }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "medium" }}>
              Earn
            </Typography>
            <Typography variant="subtitle1" sx={{ maxWidth: "295px", lineHeight: 1, mt: "24px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Typography variant="subtitle1" sx={{ maxWidth: "295px", lineHeight: 1, mt: "24px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "medium" }}>
              Borrow
            </Typography>
            <Typography variant="subtitle1" sx={{ maxWidth: "295px", lineHeight: 1, mt: "24px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Typography variant="subtitle1" sx={{ maxWidth: "295px", lineHeight: 1, mt: "24px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
        </Grid>
        {!lg && (
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "100px",
              position: "relative",
            }}>
            <img src={lines} alt="lines" />
          </Grid>
        )}
        <Grid
          item
          xs={12}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: { xs: "center", lg: "start" },
          }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "medium", mt: -2 }}>
              Dividends
            </Typography>
            <Typography variant="subtitle1" sx={{ maxWidth: "295px", lineHeight: 1, mt: "24px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Stack direction="row" justifyContent="center" alignItems="start" sx={{ mt: "24px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#179C64",
                  marginTop: "5px",
                  marginRight: "5px",
                }}></div>
              <Typography variant="subtitle1" sx={{ maxWidth: "295px", lineHeight: 1 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. tortor, dignissim sit amet.
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="center" alignItems="start" sx={{ mt: "24px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#179C64",
                  marginTop: "5px",
                  marginRight: "5px",
                }}></div>
              <Typography variant="subtitle1" sx={{ maxWidth: "295px", lineHeight: 1 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. tortor, dignissim sit amet.
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>

      {lg && (
        <Grid container alignItems="center" justifyContent="center" ref={ref} mt={5}>
          <Grid item xs={12}>
            <Stack direction="row" spacing={0.5} lignItems="center" justifyContent="center">
              <Typography variant="h4" sx={{}}>
                $9,449,627.26
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  display: "inline",
                  color: "primary.main",
                }}>
                Dividends
              </Typography>
            </Stack>
            <Typography
              variant="subtitle1"
              textAlign="center"
              sx={{
                color: "primary.contrastText",
                fontWeight: "normal",
              }}>
              Paid out to Hatom Token Holders over 3 years
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <PrimaryButton
              sx={{
                borderRadius: "12px",
              }}>
              Buy Hatom Token
            </PrimaryButton>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default React.forwardRef(Features);
