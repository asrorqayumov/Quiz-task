import React from "react";
import Fade from "react-reveal/Fade";
import Img1 from "../../images/flower1.png";
import Img2 from "../../images/flower2.jpg";
import Img3 from "../../images/flower3.jpg";
import "./style.css";

export const Home = () => {
  return (
    <div className="HomeContainer">
      <div className="header">
        <Fade right className='fade'>
          <p className="title">
            Rasmlarni taqqoslang va ular orasiga teng "=" yoki teng emas "&ne;"
            belgisini to'g'ri joylashtiring
          </p>
        </Fade>
      </div>

      <div className="HomeWrapper">
        <div className="testHomeWrapper">
          <img src={Img1} alt="" className="image-test oneImage" />
          <span className="rectangle"></span>
          <img src={Img1} alt="" className="image-test oneImage" />
        </div>
        <div className="testHomeWrapper">
          <img src={Img2} alt="" className="image-test twoImage" />
          <span className="rectangle"></span>
          <img src={Img3} alt="" className="image-test twoImage" />
        </div>
      </div>

      <div className="optionContainer">
        <span className="rectangle equal">=</span>
        <span className="rectangle notequal">&ne;</span>
      </div>
    </div>
  );
};
