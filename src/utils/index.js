
export const isFirstXRightPlace = (ox, firstImg, setFirstImg) => {
  if (Math.abs(ox) >= Math.abs(-206) && Math.abs(ox) <= Math.abs(-212)) {
    setFirstImg({ ...firstImg, x: true });
    return -209;
  } else {
    setFirstImg({ ...firstImg, x: false });
    return ox;
  }
};

export const isFirstYRightPlace = (oy, firstImg, setFirstImg) => {
  if (Math.abs(oy) >= Math.abs(-191) && Math.abs(oy) <= Math.abs(-197)) {
    setFirstImg({ ...firstImg, y: true });
    return -194;
  } else {
    setFirstImg({ ...firstImg, y: false });
    return oy;
  }
};

export const isSecondXRightPlace = (ox, secondImg, setSecondImg) => {
  if (Math.abs(ox) >= Math.abs(206) && Math.abs(ox) <= Math.abs(212)) {
    setSecondImg({ ...secondImg, x: true });
    return 209;
  } else {
    setSecondImg({ ...secondImg, x: false });
    return ox;
  }
};

export const isSecondYRightPlace = (oy, secondImg, setSecondImg) => {
  if (Math.abs(oy) >= Math.abs(-190) && Math.abs(oy) <= Math.abs(-196)) {
    setSecondImg({ ...secondImg, y: true });
    return -193;
  } else {
    setSecondImg({ ...secondImg, y: false });
    return oy;
  }
};
