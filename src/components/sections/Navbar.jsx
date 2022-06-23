import { Box, Drawer, Grid, Link, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Button from "@mui/material/Button";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import BurgerIcon from "../Buttons/BurgerIcon";
import logo from "../../assets/svg/logo.svg";
import elrond from "../../assets/svg/elrond-logo.svg";

const allLinks = ["Markets", "Governance", "Prices", "Docs"];

export const Navbar = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);

  return (
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ height: "66px" }}>
        {/* Logo  */}
        <Box sx={{ posisiton: "relative", zIndex: 10000 }}>
          <Link sx={{ display: "flex", justifyContent: "space-between" }} href="*" underline="none">
            <img src={logo} alt="logo" />
            <Typography sx={{ fontFamily: "NueHass", fontWeight: "900", fontSize: "18px", color: "white", ml: "5px" }}>
              hatom
            </Typography>
          </Link>
        </Box>
        {/* All Nav Links  */}
        {!sm && (
          <Stack direction="row" justifyContent="space-evenly">
            {allLinks.map((link, index) => (
              <Link
                variant="body1"
                href="*"
                key={index}
                underline="none"
                sx={{
                  color: "white",
                  mr: "20px",
                  "&:hover": {
                    color: "secondary.light",
                    borderBottom: "2px solid #102860 ",
                    borderBottomLeftRadius: "2px",
                    borderBottomRightRadius: "2px",
                  },
                }}>
                {link}
              </Link>
            ))}

            <Link
              variant="body1"
              href="*"
              underline="none"
              sx={{
                color: "secondary.light",
                mr: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                gap: "1px",
                borderBottom: "2px solid #102860 ",
                borderBottomLeftRadius: "2px",
                borderBottomRightRadius: "2px",
              }}>
              Hatom Token
              <span className="pulsating-dot"></span>
            </Link>
          </Stack>
        )}
        {/* CTA Button  */}
        <Stack direction="row" justifyContent="center" gap={1} sx={{ width: "max-content" }}>
          <PrimaryButton>
            <img src={elrond} alt="elrond" />
            Elrond
          </PrimaryButton>
          {!sm ? (
            <SecondaryButton label="App" />
          ) : (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", ml: 1 }}>
              <BurgerIcon clickHandler={() => setOpen(!open)} open={open} />
            </Box>
          )}
        </Stack>
      </Stack>

      {sm && (
        <Drawer
          anchor="top"
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              height: "100vh",
              width: "100%",
              background:
                "linear-gradient(0deg, #B5D2FF 0%, #A2BBF7 10%, #7380E4 30%, #5960D9 40%, #3939A1 72%, #1D166F 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          }}>
          <Stack direction="column" justifyContent="space-evenly" alignItems="center">
            {allLinks.map((link, index) => (
              <Link
                variant="body1"
                href="*"
                key={index}
                underline="none"
                sx={{
                  color: "white",
                  mt: 6,
                }}>
                {link}
              </Link>
            ))}

            <Link
              variant="body1"
              href="*"
              underline="none"
              sx={{
                color: "white",
                mt: 6,
              }}>
              Hatom Token
              <span className="pulsating-dot"></span>
            </Link>
          </Stack>
        </Drawer>
      )}
    </Container>
  );
};
