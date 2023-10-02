/** @jsxImportSource @emotion/react */
import { useAuthenticationContext } from '../../contexts';
import { useState } from 'react';
import { Button, Container, Input } from '../../components';
import { css } from '@emotion/react';

export const Unauthenticated = () => {
   const [login, setLogin] = useState('');
   const [password, setPassword] = useState('');

   const context = useAuthenticationContext();

   const handleLogin = (e: any) => {
      e.preventDefault();
      context?.login(login, password);
   };

   return (
      <Container>
         <Input
            placeholder="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
         />
         <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            css={css`
               margin: 1rem 0 2.5rem 0;
            `}
         />
         <Button onClick={handleLogin}>Login</Button>
      </Container>
   );
};

export default Unauthenticated;
