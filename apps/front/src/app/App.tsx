/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { Button, Loader } from '../components';

const Container = styled.div`
   text-align: center;
   min-height: calc(100vh - 100px);
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   font-size: calc(10px + 2vmin);
   padding: 50px;
`;

enum State {
   LOADING = 'loading',

   LOADED = 'loaded',

   ERROR = 'error',
}

export function App() {
   const [state, setState] = useState<State>(State.LOADING);
   const [quote, setQuote] = useState<undefined | string>();

   const getQuote = async () => {
      const response = await fetch(
         `${import.meta.env.VITE_API_URI}/quotes/random`,
      );
      if (response.ok) {
         const quote = await response.json();
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
}

export default App;
