import react from "react";

export const isFirstXRightPlace = (ox, firstImg, setFirstImg) => {
  if (Math.abs(ox) > Math.abs(-200) && Math.abs(ox) < Math.abs(-220)) {
    setFirstImg({ ...firstImg, x: true });
    return -209;
  } else {
    setFirstImg({ ...firstImg, x: false });
    return ox;
  }
};

export const isFirstYRightPlace = (oy, firstImg, setFirstImg) => {
  if (Math.abs(oy) > Math.abs(-181) && Math.abs(oy) < Math.abs(-200)) {
    setFirstImg({ ...firstImg, y: true });
    return -191;
  } else {
    setFirstImg({ ...firstImg, y: false });
    return oy;
  }
};
