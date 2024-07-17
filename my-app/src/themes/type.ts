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

export type Themes = {
  fontSizes: FontSizes;
  colors: Colors;
};

export interface UserProfile {
  nickname: string;
  profile_image?: string; // 640x640
  thumbnail_image?: string; // 110x110
}

export interface KakaoProfile {
  nickname: string;
  thumbnail_image_url: string;
  profile_image_url: string;
  is_default_image: boolean;
  is_default_nickname: boolean;
}

export interface KakaoAccount {
  profile_nickname_needs_agreement: boolean;
  profile_image_needs_agreement: boolean;
  profile: KakaoProfile;
  has_email: boolean;
  email_needs_agreement: boolean;
  is_email_valid: boolean;
  is_email_verified: boolean;
  email: string;
}

export interface UserInfo {
  id: number;
  connected_at: string;
  properties: UserProfile;
  kakao_account: KakaoAccount;
}
