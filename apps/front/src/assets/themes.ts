import '@emotion/react';
import { Theme } from '@emotion/react';

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
         secondary: string;
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

export const light: Theme = {
   colors: {
      ...base.colors,
      background: base.colors.white,
      color: base.colors.black,
      primary: '#006f91',
      secondary: '#b25602',
      purple: '#84019a',
      red: '#a90120',
      green: '#01a167',
   },
};

export const dark: Theme = {
   colors: {
      ...base.colors,
      background: base.colors['dark-grey'],
      color: base.colors.white,
      primary: '#6CCAFF',
      secondary: '#FFAA5C',
      purple: '#F2A5FF',
      red: '#F35673',
      green: '#00FEA3',
   },
};
