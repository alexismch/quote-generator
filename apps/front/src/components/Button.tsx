import styled from '@emotion/styled';

export const Button = styled.button`
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
