import '@emotion/react';
import { Theme as ThemeType } from '@emotion/react';

declare module '@emotion/react' {
   export interface Theme {
      colors: {
         white: string;
         black: string;
         'light-grey': string;
         grey: string;
         'dark-grey': string;
         background: string;
         color: string;
         primary: string;
         blue: string;
         purple: string;
         red: string;
         green: string;
      };
   }
}

const base = {
   colors: {
      white: '#F6F6F6',
      black: '#181818',
      'light-grey': '#575757',
      grey: '#2E2E2E',
      'dark-grey': '#232323',
   },
};

export enum Theme {
   DARK = 'dark',

   LIGHT = 'light',
}

export const light: ThemeType = {
   colors: {
      ...base.colors,
      background: base.colors.white,
      color: base.colors.black,
      primary: '#b25602',
      blue: '#006f91',
      purple: '#84019a',
      red: '#a90120',
      green: '#01a167',
   },
};

export const dark: ThemeType = {
   colors: {
      ...base.colors,
      background: base.colors['dark-grey'],
      color: base.colors.white,
      primary: '#FFAA5C',
      blue: '#6CCAFF',
      purple: '#F2A5FF',
      red: '#F35673',
      green: '#00FEA3',
   },
};

export const getTheme = (theme: Theme): ThemeType => {
   switch (theme) {
      case Theme.LIGHT:
         return light;
      case Theme.DARK:
      default:
         return dark;
   }
};
