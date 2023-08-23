let thBlack = "#1E1F28";
let thTransBlack = "#1e1f2830";
let textBlack = "#23262A";
let thBttnBlack = "#22252A";
let thFormBlack = "#2A2C36";
let thWhite = "#FAFAFA";
let thTransWhite = "#fafafa30";
let thGreen = "#EBF3D4";
let thDarkGreen = "#8BAA36";
let thNavy = "#001833";

const standardColors = {
  standardFormBlack: thFormBlack,
  standardWhite: thWhite,
  standardGreen: thDarkGreen,
  standardBlack: thBttnBlack,
  standardDarkBlack: thBlack,
};

const darkTheme = {
  ...standardColors,
  mainBg: thBlack,
  mobileBg: thBlack,
  mainTextColor: thWhite,
  buttonNormal: thDarkGreen,
  buttonHover: thBttnBlack,
  headers: thWhite,
  transparentBg: thTransWhite,
  darkToGreen: thDarkGreen,
};
const lightTheme = {
  ...standardColors,
  mainBg: thWhite,
  mobileBg: thGreen,
  mainTextColor: textBlack,
  buttonNormal: thBttnBlack,
  buttonHover: thDarkGreen,
  headers: thNavy,
  transparentBg: thTransBlack,

  darkToGreen: thBttnBlack,
};
export { darkTheme };
export default lightTheme;
