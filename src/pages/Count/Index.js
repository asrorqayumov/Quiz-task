import React, { useRef, useState } from "react";
import "./style.css";
import { Button } from "./../../components/Button";
import FadeAnimation from "react-fade-animation";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const trueValue = [1, 3];

export const Count = () => {
  const secondInput = useRef();
  const [firstNumber, setFirstNumber] = useState("");
  const [isFirstNumberTrue, setIsFirstNumberTrue] = useState(true);
  const [secondNumber, setSecondNumber] = useState("");
  const [isSecondNumberTrue, setIsSecondNumberTrue] = useState(true);

  const inputHandler = (number) => {
    if (firstNumber === trueValue[0]) {
      setSecondNumber(number);
      if (number === trueValue[1]) setIsSecondNumberTrue(true);
      else setIsSecondNumberTrue(false);
    } else {
      setFirstNumber(number);
      if (number === trueValue[0]) {
        setIsFirstNumberTrue(true);
        secondInput.current.focus();
      } else setIsFirstNumberTrue(false);
    }
  };

  if (firstNumber === trueValue[0] && secondNumber === trueValue[1]) {
    return (
      <div className="correct-wrapper">
        <p>Ajoyib</p>
      </div>
    );
  }
  return (
    <div className="HomeContainer">
      <div className="header header-count">
        <FadeAnimation duration={1.1} startDistance={350} from={"right"}>
          <div className="title d-flex">
            <span className="icon-sound">
              <VolumeUpIcon />
            </span>
            <p> To'liq o'nlikni ajrating va sharlarni sanang</p>
          </div>
          <div className="subTitle d-flex">
            {!(firstNumber || firstNumber === 0) && (
              <>
                <span className="icon-sound">
                  <VolumeUpIcon />
                </span>
                <span>Sharlarni sanang va ular sonini yozing</span>
              </>
            )}
          </div>
        </FadeAnimation>
      </div>

      <div className="HomeWrapper">
        <div
          className={`mr-60 p-30 purple-circles ${
            isFirstNumberTrue ? "" : "red-circle"
          }`}
        >
          <div className="d-flex">
            <span className="circle circle-purple ml-36"></span>
            <span className="circle circle-purple"></span>
            <span className="circle circle-purple"></span>
            <span className="circle circle-purple"></span>
            <span className="circle circle-purple"></span>
          </div>
          <div className="d-flex">
            <span className="circle circle-purple"></span>
            <span className="circle circle-purple"></span>
            <span className="circle circle-purple"></span>
            <span className="circle circle-purple"></span>
            <span className="circle circle-purple"></span>
          </div>
        </div>
        <div
          className={`p-30 yellow-circles ${
            isSecondNumberTrue ? "" : "red-circle"
          }`}
        >
          <div className="d-flex">
            <span className="circle circle-yellow"></span>
            <span className="circle circle-yellow"></span>
          </div>
          <div className="d-flex">
            <span className="circle circle-yellow ml-36"></span>
          </div>
        </div>
      </div>

      <div className="inputwrapper">
        <label
          htmlFor=""
          className={`label ${isFirstNumberTrue ? "" : "border-red"}   ${
            isSecondNumberTrue ? "" : "border-red"
          }`}
        >
          <input
            type="number"
            onChange={(e) => inputHandler(e.target.value)}
            value={firstNumber}
            className="input"
            max={9}
            min={0}
          />
          <input
            type="number"
            className="input"
            value={secondNumber}
            ref={secondInput}
            onChange={(e) => inputHandler(e.target.value)}
            max={9}
            min={0}
          />
        </label>
      </div>

      <div className="optionContainer">
        {list.map((number) => {
          return (
            <Button key={number} setNumber={inputHandler} value={number} />
          );
        })}
      </div>
    </div>
  );
};
