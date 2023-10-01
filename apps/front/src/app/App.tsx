/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const Container = styled.div`
   text-align: center;
   min-height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   font-size: calc(10px + 2vmin);
`;

const Button = styled.button`
   height: 50px;
   width: 150px;
   background: none;
   border: 2px solid;
   border-radius: 5px;
   font-weight: bold;
   font-size: 15px;
   color: ${(props) => props.theme.colors.primary};
   border-color: ${(props) => props.theme.colors.primary};
   text-transform: uppercase;

   :hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.background};
      background: ${(props) => props.theme.colors.primary};
   }
`;

export function App() {
   return (
      <Container>
         <p>That's my quote</p>
         <Button>Next</Button>
      </Container>
   );
}

export default App;
