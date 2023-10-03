/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { useAuthenticationContext, useThemeContext } from '../contexts';
import { Authenticated } from './authenticated';
import { Unauthenticated } from './unauthenticated';
import { Button as BaseButton, Container } from '../components';
import { Theme } from '../assets/themes';

const Button = styled(BaseButton)`
   height: 40px;
   width: 120px;
   color: ${({ theme }) => theme.colors.background};
   border-color: ${({ theme }) => theme.colors.background};
   text-transform: uppercase;

   :hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.background};
   }
`;

export const App = () => {
   const themeContext = useThemeContext();
   const authenticationContext = useAuthenticationContext();

   return (
      <>
         <div
            css={(theme) => css`
               width: calc(100% - 10px);
               height: 40px;
               padding: 5px;
               position: absolute;
               border-radius: 0 0 5px 5px;
               background: ${theme.colors.primary};
               display: flex;
               flex-direction: row;
               align-items: center;
               justify-content: space-between;
            `}>
            <Button onClick={themeContext?.switchTheme}>
               {themeContext?.theme === Theme.DARK ? Theme.LIGHT : Theme.DARK}
            </Button>
            {authenticationContext?.isAuthenticated && (
               <Button onClick={authenticationContext?.logout}>Logout</Button>
            )}
         </div>
         <Container>
            {authenticationContext?.isAuthenticated ? (
               <Authenticated />
            ) : (
               <Unauthenticated />
            )}
         </Container>
      </>
   );
};

export default App;
