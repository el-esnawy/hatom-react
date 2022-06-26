import { Container, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import lines from "../../assets/svg/lines.svg";

const Features = (props, ref) => {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Container maxWidth="xl" id="feature" sx={{ position: "relative" }}>
      {/*  DIVIDENDS AND CTA */}
      {!lg && (
        <Container maxWidth="xl" ref={ref}>
          <Stack direction="row" justifyContent="space-between">
            <Stack justifyContent="space-between" alignItems="center">
              <Stack direction="row" spacing={5}>
                <Typography variant="h4" fontWeight="normal" sx={{ fontWeight: "normal", letterSpacing: "0.5px" }}>
                  $9,449,627.26
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    display: "inline",
                    color: "primary.main",
                    fontWeight: "normal",
                    letterSpacing: "0.5px",
                  }}>
                  Dividends
                </Typography>
              </Stack>

              <Typography
                variant="subtitle1"
                sx={{
                  color: "primary.contrastText",
                  fontWeight: "normal",
                  letterSpacing: "0.5px",
                }}>
                Paid out to Hatom Token Holders over 3 years
              </Typography>
            </Stack>
            <PrimaryButton
              sx={{
                borderRadius: 2,
                lineHeight: 1,
                fontSize: "1.8rem",
                px: 16,
                py: 0,
              }}>
              Buy Hatom Token
            </PrimaryButton>
          </Stack>
        </Container>
      )}
      {/* SECTION Header */}
      <Stack direction="row" spacing={1} sx={{ mt: "100px" }} justifyContent={{ xs: "center", lg: "start" }}>
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
        sx={{ mt: { lg: "25px", xs: 0 }, pt: { lg: "25px", xs: 0 }, position: "relative" }}
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
            alignItems: { xs: "center", lg: "start" },
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

          {!lg && (
            <img
              src={lines}
              alt="lines"
              style={{
                position: "absolute",
                left: 0,
                right: "5%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          )}
        </Grid>

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
            <Typography variant="h5" sx={{ fontWeight: "medium" }}>
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
            <Stack direction="row" spacing={0.5} alignItems="center" justifyContent="center">
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
