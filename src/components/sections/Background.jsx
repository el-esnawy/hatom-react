import { useMediaQuery } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useTheme } from "@emotion/react";
import largeCoin from "../../assets/img/coin-sequence.png";
import smallCoin from "../../assets/img/coin-sequence-200x.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

const percentages = [];
for (let i = 0; i <= 22; i++) {
  percentages.push(`${i * 100}%`);
}

const Background = ({ start, entry }) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const image = useRef();
  const coin = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#coin", {
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        end: "bottom 10%",
        anticipatePin: true,
        pin: "#coin",
        scrub: true,
      },
      keyframes: {
        backgroundPositionY: percentages,
        ease: "steps(22)",
      },

      y: "120%",
    });
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: "auto 0px auto 0px",
        top: "30vw",
      }}>
      <div
        id="container"
        style={{
          // position: "fixed",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "70vw",
          position: "fixed",
          top: "30vw",
        }}></div>

      <div
        ref={image}
        style={{
          // position: "fixed",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}>
        <div
          id="coin"
          ref={coin}
          style={{
            marginLeft: "5vw",
            width: "12vw",
            height: "12vw",
            backgroundImage: sm ? `url(${smallCoin})` : `url(${largeCoin})`,
            backgroundSize: "cover",
          }}></div>
      </div>
    </div>
  );
};

export default Background;
