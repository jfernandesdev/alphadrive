import styled from 'styled-components';

export const WrapperCards = styled.div`
  
  overflow-y: scroll;
  padding: 20px;

  &::-webkit-scrollbar{
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--chakra-colors-purple100);
    border-radius: 15px;
  }

  button:hover, button:focus {
    background: var(--chakra-colors-purple200);
  }
`;
