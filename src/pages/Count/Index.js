import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import "./style.css";
import { Button } from "./../../components/Button";

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Count = () => {
  const [number, setNumber] = useState(null);

  return (
    <div className="HomeContainer">
      <div className="header header-count">
        <Fade right className="fade">
          <p className="title">To'liq o'nlikni ajrating va sharlarni sanang</p>
          <p className="subTitle">Sharlarni sanang va ular sonini yozing</p>
        </Fade>
      </div>

      <div className="HomeWrapper">
        <div className="mr-60">
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
        <div>
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
        <input type="number" onChange={(e)=>setNumber(e.target.value)} value={number} />
        <input type="number" />
      </div>

      <div className="optionContainer">
        {arr.map((number) => {
          return <Button  key={number} setNumber={setNumber} value={number} />;
        })}
      </div>
    </div>
  );
};
