const colours = {
  alto: "hsl(0, 0%, 87%)",
  teal: "hsl(180, 100%, 25%)",
  forestGreen: "hsl(120, 61%, 34%)",
  crimson: "hsl(348, 83%, 47%)",
  silverChalice: "hsl(0, 0%, 67%)",
  white: "hsl(0, 0%, 100%)",
  roseWhite: "hsl(0, 100%, 99%)",
  breakerBay: "hsl(182, 25%, 50%)",
  red: "rgb(255, 0, 0)",
};

export const theme = {
  color: {
    pageBackground: colours.alto,
    elementBakground: colours.white,
    border: colours.alto,
    taskButton: colours.teal,
    toggleDoneButton: colours.forestGreen,
    deleteButton: colours.crimson,
    disabledButton: colours.silverChalice,
    buttonText: colours.white,
    footerBackground: colours.roseWhite,
    footerLink: colours.breakerBay,
    navigationBackground: colours.teal,

    red: colours.red,
  },

  transition: {
    time: "0.2s",
  },

  breakpoint: {
    mobileMax: "767px",
  },
};
