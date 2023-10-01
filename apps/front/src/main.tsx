import { StrictMode, useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider, Global, css } from '@emotion/react';

import { Theme, getTheme } from './assets/themes';
import App from './app/App';

const Main = () => {
   const [theme] = useState<Theme>(Theme.DARK);

   return (
      <ThemeProvider theme={getTheme(theme)}>
         <Global
            styles={(props) => {
               return css`
                  html,
                  body {
                     padding: 0;
                     margin: 0;
                     font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
                        Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
                        Helvetica Neue, sans-serif;
                     background: ${props.colors.background};
                     color: ${props.colors.color};
                  }
               `;
            }}
         />
         <App />
      </ThemeProvider>
   );
};

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement,
);
root.render(
   <StrictMode>
      <Main />
   </StrictMode>,
);
