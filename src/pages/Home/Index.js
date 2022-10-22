import React, { useEffect, useRef, useState } from "react";
import Img1 from "../../images/flower1.png";
import Img2 from "../../images/flower2.jpg";
import Img3 from "../../images/flower3.jpg";
import "./style.css";
import FadeAnimation from "react-fade-animation";
import { useDrag } from "react-use-gesture";
import { useSpring, animated } from "react-spring";

export const Home = () => {
  const firstBox = useRef();
  const secondBox = useRef();
  const [firstBoxRect, setFirstBoxRect] = useState(0);
  const [secondBoxRect, setSecondBoxRect] = useState(0);
  const [firstImg, setFirstImg] = useState(false);
  const [secondImg, setSecondImg] = useState(false);
  const firstItemPos = useSpring({ x: 0, y: 0 });
  const secondItemPos = useSpring({ x: 0, y: 0 });

  const bindFirstItemPos = useDrag((params) => {
    const x = params.offset[0];
    const y = params.offset[1];
    firstItemPos.x.set(x);
    firstItemPos.y.set(y);
    if (x === firstBoxRect.x && y === firstBoxRect.y) {
      setFirstImg(true);
      console.log("bye");
    } else {
      console.log("hi");
    }
  });

  const [{ x, y }, first] = useSpring(() => ({ x: 0, y: 0 }));

  // const bind = useDrag(({ offset: [x, y] }) =>
  //     first.start({ x, y, }),
  //   {
  //     bounds: { left: -500, right: 500, top: -450, bottom: 100 },
  //     rubberband: true,
  //     threshold: 10
  //   }
  // );

  const bind = useDrag(({ down, movement: [mx, my], tap }) => {
    console.log(tap);
      if (tap) {
        alert("tap!");
        console.log(tap);
      }
      first.start({ x: down ? mx : 0, y: down ? my : 0 });
    },
    {
      filterTaps: true,
      bounds: { left: -500, right: 500, top: -450, bottom: 100 },
    }
  );

  useEffect(() => {
    setFirstBoxRect(firstBox.current.getBoundingClientRect());
    setSecondBoxRect(secondBox.current.getBoundingClientRect());
  }, []);

  if (firstImg && secondImg)
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
          <span className="rectangle" ref={firstBox}></span>
          <img src={Img1} alt="" className="image-test oneImage" />
        </div>
        <div className="testHomeWrapper">
          <img src={Img2} alt="" className="image-test twoImage" />
          <span className="rectangle" ref={secondBox}></span>
          <img src={Img3} alt="" className="image-test twoImage" />
        </div>
      </div>

      <div className="optionContainer">
        <animated.span
          className="rectangle equal"
          {...bind()}
          style={{
            x,
            y,
          }}
        >
          =
        </animated.span>
        <span
          className="rectangle notequal"
          style={{
            position: "relative",
            top: secondItemPos.y,
            left: secondItemPos.x,
          }}
        >
          &ne;
        </span>
      </div>
    </div>
  );
};
