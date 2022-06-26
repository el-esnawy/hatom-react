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
    const timeline = gsap.timeline();

    timeline.to("#coin", {
      scrollTrigger: {
        trigger: "#backgroundimage",
        endTrigger: "#feature",
        start: "center center",
        end: "center 45%",
        anticipatePin: true,
        pin: "#coin",
        scrub: true,
      },
      keyframes: {
        backgroundPositionY: percentages,
        ease: "steps(22)",
      },

      y: "20%",
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
            marginLeft: "6vw",
            maxWidth: "270px",
            maxHeight: "270px",
            width: "15vw",
            height: "15vw",
            backgroundImage: sm ? `url(${smallCoin})` : `url(${largeCoin})`,
            backgroundSize: "100%",
          }}></div>
      </div>
    </div>
  );
};

export default Background;
