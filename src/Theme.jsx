let thBlack = '#1E1F28';
let thTransBlack = '#1e1f2830';
let textBlack = '#23262A';
let thBttnBlack = '#22252A';
let thFormBlack = '#2A2C36';
let thWhite = '#FAFAFA';
let thTransWhite = '#fafafa30';
let thGreen = '#EBF3D4';
let thDarkGreen = '#8BAA36';
let thNavy = '#001833';
// Small - 14px
// Medium - 16px
// Big - 18px

const standard = {
    standardFormBlack: thFormBlack,
    standardWhite: thWhite,
    standardGreen: thDarkGreen,
    standardLightGreen: thGreen,
    standardBlack: thBttnBlack,
    standardDarkBlack: thBlack,
    smallFS: '14px',
    mediumFS: '16px',
    bigFS: '18px',
};

// text white -> black
// button green -> black
// button black -> green

const darkTheme = {
    ...standard,
    mainBg: thBlack,
    mobileBg: thBlack,
    mainTextColor: thWhite,
    blackToGreen: thDarkGreen,
    greenToDark: thBttnBlack,
    buttonHover: thBttnBlack,
    headers: thWhite,
    transparentBg: thTransWhite,
    darkToGreen: thDarkGreen,
};
const lightTheme = {
    ...standard,
    mainBg: thWhite, // background white -> black
    mobileBg: thGreen, //background green -> black
    mainTextColor: textBlack, // text black -> white
    blackToGreen: thBttnBlack, //black to dark greens
    greenToDark: thDarkGreen,
    buttonHover: thDarkGreen,
    headers: thNavy, // headers navy -> white
    transparentBg: thTransBlack, //modal transparent black - > white
    darkToGreen: thBttnBlack, //background black -> green
};
export { darkTheme };
export default lightTheme;
