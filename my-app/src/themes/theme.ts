import { FontSizes, Colors } from './type';

const fontSizes: FontSizes = {
  h1: '40px',
  h2: '36px',
  h3: '32px',
  h4: '28px',
  h5: '24px',
  h6: '20px',
  body1: '18px',
  body2: '16px',
  body3: '14px',
  caption: '12px',
  fontWeight: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
};

const colors: Colors = {
  light: {
    primary10: '#F3F3FB',
    primary20: '#2F53FF',
    primary30: '#263EBF',
    primary40: '#132BAC',
    blue10: '#F2F6FF',
    blue20: '#E0EBF6',
    blue30: '#237BC9',
    blue40: '#002C53',
    red10: '#FCE9E7',
    red20: '#E74C3C',
    yellow10: '#FDF7E2',
    yellow20: '#F1C40F',
    green10: '#E5F8EF',
    green20: '#2ECC71',
    gray10: '#FFFFFF',
    gray20: '#FAFAFA',
    gray30: '#F7F7F7',
    gray40: '#E5E5E5',
    gray50: '#CCCCCC',
    gray60: '#7F7F7F',
    gray70: '#444444',
    gray80: '#333333',
    gray90: '#000000',
  },
  dark: {
    primary10: '#000D8E',
    primary20: '#2F4DEF',
    primary30: '#5B6ED4',
    primary40: '#4F98D9',
    blue10: '#151A24',
    blue20: '#0C2942',
    blue30: '#237BC9',
    blue40: '#002C53',
    red10: '#4C1914',
    red20: '#E74C3C',
    yellow10: '#504105',
    yellow20: '#F1C40F',
    green10: '#0F4325',
    green20: '#2ECC71',
    gray10: '#000000',
    gray20: '#060606',
    gray30: '#191919',
    gray40: '#333333',
    gray50: '#545454',
    gray60: '#8E8E8E',
    gray70: '#D9D9D9',
    gray80: '#EEEEEE',
    gray90: '#FFFFFF',
  },
};

const theme = {
  fontSizes,
  colors,
};

export default theme;
