import DefaultStyle from './Color';

export const getColorTheme = (isLight) => {
    return isLight ? DefaultStyle.primary : DefaultStyle.darkprimary
  };

  export const getBackgroundColorTheme = (isLight) => {
    return isLight ? DefaultStyle.background : DefaultStyle.darkBackground
  };

  export const getTileBackgroundColorTheme = (isLight) => {
    return isLight ? DefaultStyle.background : DefaultStyle.tileBackground
  };

  export const getHeaderBackgroundColorTheme = (isLight) => {
    return isLight ? DefaultStyle.background : DefaultStyle.headerBackground
  };

  export const getTextColorTheme = (isLight) => {
    return isLight ? 'black' : 'white'
  };