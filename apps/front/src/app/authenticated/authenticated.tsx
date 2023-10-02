/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import { IQuoteResponse } from '@quote-generator/shared';

import { Button, Container, Loader } from '../../components';

enum State {
   LOADING = 'loading',

   LOADED = 'loaded',

   ERROR = 'error',
}

export const Authenticated = () => {
   const [state, setState] = useState<State>(State.LOADING);
   const [quote, setQuote] = useState<undefined | string>();

   const getQuote = async () => {
      const response = await fetch(
         `${import.meta.env.VITE_API_URI}/quotes/random`,
         { credentials: 'include' },
      );
      if (response.ok) {
         const quote: IQuoteResponse = await response.json();
         setQuote(quote.content);
         setState(State.LOADED);
      } else {
         setQuote(undefined);
         setState(State.ERROR);
      }
   };

   useEffect(() => {
      getQuote();
   }, []);

   return (
      <Container>
         <p
            css={css`
               margin: 2.5rem 0;
            `}>
            {state === State.LOADING && <Loader />}
            {state === State.LOADED && quote}
            {state === State.ERROR && 'An error occurred...'}
         </p>
         <Button
            onClick={(e) => {
               e.preventDefault();
               setState(State.LOADING);
               getQuote();
            }}>
            Next
         </Button>
      </Container>
   );
};

export default Authenticated;
