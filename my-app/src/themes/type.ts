export type FontWeight = {
  light: string;
  regular: string;
  medium: string;
  semibold: string;
  bold: string;
};

export type FontSizes = {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  body1: string;
  body2: string;
  body3: string;
  caption: string;
  fontWeight: FontWeight;
};

export type Colors = {
  light: {
    primary10: string;
    primary20: string;
    primary30: string;
    primary40: string;
    blue10: string;
    blue20: string;
    blue30: string;
    blue40: string;
    red10: string;
    red20: string;
    yellow10: string;
    yellow20: string;
    green10: string;
    green20: string;
    gray10: string;
    gray20: string;
    gray30: string;
    gray40: string;
    gray50: string;
    gray60: string;
    gray70: string;
    gray80: string;
    gray90: string;
  };
  dark: {
    primary10: string;
    primary20: string;
    primary30: string;
    primary40: string;
    blue10: string;
    blue20: string;
    blue30: string;
    blue40: string;
    red10: string;
    red20: string;
    yellow10: string;
    yellow20: string;
    green10: string;
    green20: string;
    gray10: string;
    gray20: string;
    gray30: string;
    gray40: string;
    gray50: string;
    gray60: string;
    gray70: string;
    gray80: string;
    gray90: string;
  };
};

export type Theme = {
  fontSizes: FontSizes;
  colors: Colors;
};
