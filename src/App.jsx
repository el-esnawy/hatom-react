import { Container, useMediaQuery, useTheme } from "@mui/material";

import Background from "./components/sections/Background";
import Features from "./components/sections/Features";
import Hero from "./components/sections/Hero";
import { Navbar } from "./components/sections/Navbar";
import BackgroundImage from "./assets/svg/bg.svg";
import MobileBackground from "./assets/img/bg-phone.png";
import Subscribe from "./components/sections/Subscribe";
import Footer from "./components/sections/Footer";

import { useInView } from "react-intersection-observer";

function App() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  const { ref, inView } = useInView({
    rootMargin: "10%",
  });

  return (
    <>
      <Container maxWidth="xl" sx={{}}>
        <img
          id="backgroundimage"
          src={sm ? MobileBackground : BackgroundImage}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", zIndex: -1 }}
          alt="background"
        />
        <Background start={inView} />
        <Navbar />
        <Hero />
        <Features ref={ref} />
      </Container>
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
