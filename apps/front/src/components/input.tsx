import styled from '@emotion/styled';

export const Input = styled.input`
   height: 40px;
   width: 200px;
   background: none;
   border: 2px solid;
   border-radius: 5px;
   font-weight: bold;
   font-size: 15px;
   color: ${(props) => props.theme.colors.white};
   border-color: ${(props) => props.theme.colors.primary};
   padding: 0 5px;
`;
