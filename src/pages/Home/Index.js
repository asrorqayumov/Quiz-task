import React, { useEffect, useRef, useState } from "react";
import Img1 from "../../images/flower1.png";
import Img2 from "../../images/flower2.jpg";
import Img3 from "../../images/flower3.jpg";
import FadeAnimation from "react-fade-animation";
import { useDrag } from "react-use-gesture";
import { useSpring, animated } from "react-spring";
import {
  isFirstXRightPlace,
  isFirstYRightPlace,
  isSecondXRightPlace,
  isSecondYRightPlace,
} from "../../utils";
import "./style.css";

export const Home = () => {
  const [firstImg, setFirstImg] = useState({ x: false, y: false });
  const [secondImg, setSecondImg] = useState({ x: false, y: false });

  const [{ x, y }, first] = useSpring(() => ({ x: 0, y: 0 }));
  const [{ x: sx, y: sy }, second] = useSpring(() => ({ x: 0, y: 0 }));

  const bindFirst = useDrag(
    ({ down, offset: [ox, oy] }) => {
      first.start({
        x: isFirstXRightPlace(ox, firstImg, setFirstImg),
        y: isFirstYRightPlace(oy, firstImg, setFirstImg),
        immediate: down,
      });
    },
    { bounds: { left: -500, right: 500, top: -450, bottom: 100 } }
  );

  const bindSecond = useDrag(
    ({ down, offset: [ox, oy] }) => {
      second.start({
        y: isSecondYRightPlace(oy, secondImg, setSecondImg),
        x: isSecondXRightPlace(ox, secondImg, setSecondImg),
        immediate: down,
      });
    },
    { bounds: { left: -400, right: 400, top: -450, bottom: 100 } }
  );

  if (firstImg.y && secondImg.x)
    return (
      <div className="correct-wrapper">
        <p>Ajoyib</p>
      </div>
    );
  return (
    <div className="HomeContainer">
      <div className="header">
        <FadeAnimation duration={1.1} startDistance={300} from={"right"}>
          <p className="title">
            Rasmlarni taqqoslang va ular orasiga teng "=" yoki teng emas "&ne;"
            belgisini to'g'ri joylashtiring
          </p>
        </FadeAnimation>
      </div>

      <div className="HomeWrapper p-30">
        <div className="testHomeWrapper">
          <img src={Img1} alt="" className="image-test oneImage" />
          <span className="rectangle equal"></span>
          <img src={Img1} alt="" className="image-test oneImage" />
        </div>
        <div className="testHomeWrapper">
          <img src={Img2} alt="" className="image-test twoImage" />
          <span className="rectangle"></span>
          <img src={Img3} alt="" className="image-test twoImage" />
        </div>
      </div>

      <div className="optionContainer">
        <animated.span
          className="rectangle"
          {...bindFirst()}
          style={{
            x,
            y,
          }}
        >
          =
        </animated.span>
        <animated.span
          className="rectangle"
          {...bindSecond()}
          style={{
            x: sx,
            y: sy,
          }}
        >
          &ne;
        </animated.span>
      </div>
    </div>
  );
};
