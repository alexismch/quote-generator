/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';

import { useAuthenticationContext } from '../../contexts';
import { Button, Input } from '../../components';

export const Unauthenticated = () => {
   const [login, setLogin] = useState('');
   const [password, setPassword] = useState('');

   const context = useAuthenticationContext();

   const handleLogin = (e: any) => {
      e.preventDefault();
      context?.login(login, password);
   };

   return (
      <form
         onSubmit={handleLogin}
         css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
         `}>
         <Input
            placeholder="login"
            autoComplete="username"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
         />
         <Input
            placeholder="password"
            autoComplete="current-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            css={css`
               margin: 1rem 0 2.5rem 0;
            `}
         />
         <Button type="submit">Login</Button>
      </form>
   );
};

export default Unauthenticated;
