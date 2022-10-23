import React, { useEffect, useRef, useState } from "react";
import Img1 from "../../images/flower1.png";
import Img2 from "../../images/flower2.jpg";
import Img3 from "../../images/flower3.jpg";
import FadeAnimation from "react-fade-animation";
import { useDrag } from "react-use-gesture";
import { useSpring, animated } from "react-spring";
import { isFirstXRightPlace, isFirstYRightPlace } from "../../utils";
import "./style.css";

export const Home = () => {
  const firstBox = useRef();
  const secondBox = useRef();
  const firstDraggingBox = useRef();
  const secondDraggingBox = useRef();
  const [firstBoxPos, setFirstBoxPos] = useState(0);
  const [secondBoxPos, setSecondBoxPos] = useState(0);
  const [firstDraggingBoxPos, setFirstDraggingBoxPos] = useState({
    x: 0,
    y: 0,
  });
  const [secondDraggingBoxPos, setSecondDraggingBoxPos] = useState({
    x: 0,
    y: 0,
  });

  const [firstImg, setFirstImg] = useState({x:false,y:false});
  const [secondImg, setSecondImg] = useState({x:false,y:false});

  const [{ x, y }, first] = useSpring(() => ({ x: 0, y: 0 }));


  const bind = useDrag(
    ({ down, initial, offset: [ox, oy], movement: [mx, my] }) => {
      // console.log(ox, oy);
      setFirstDraggingBoxPos({ x: initial[0], y: initial[1] });
      first.start({
         x:isFirstXRightPlace(ox,firstImg,setFirstImg),
         y:isFirstYRightPlace(oy,firstImg,setFirstImg),
        immediate: down,
      });
    },
    { bounds: { left: -500, right: 500, top: -450, bottom: 100 } }
  );

  //  console.log(firstDraggingBoxPos);
  useEffect(() => {
    setFirstBoxPos(firstBox.current.getBoundingClientRect());
    setSecondBoxPos(secondBox.current.getBoundingClientRect());
    // setFirstDraggingBoxPos(firstDraggingBox.current.getBoundingClientRect());
    // setSecondDraggingBoxPos(secondDraggingBox.current.getBoundingClientRect());
  }, []);

  if (firstImg.x && firstImg.y && secondImg.x && secondImg.y)
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
          ref={firstDraggingBox}
          {...bind()}
          style={{
            x,
            y,
          }}
        >
          =
        </animated.span>
        <span ref={secondDraggingBox} className="rectangle notequal">
          &ne;
        </span>
      </div>
    </div>
  );
};
