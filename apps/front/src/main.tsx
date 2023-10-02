import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Global, css } from '@emotion/react';

import { App } from './app';
import { ThemeProvider, AuthenticationProvider } from './contexts';

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement,
);
root.render(
   <StrictMode>
      <ThemeProvider>
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
         <AuthenticationProvider>
            <App />
         </AuthenticationProvider>
      </ThemeProvider>
   </StrictMode>,
);
