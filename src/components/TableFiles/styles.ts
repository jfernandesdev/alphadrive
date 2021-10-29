import styled from 'styled-components';

export const WrapperTable = styled.div`
  max-height: 255px;
  overflow-y: scroll;

  table { 
    border-collapse: separate; 
    border-spacing: 0 5px; 
    padding-right: 5px;
    color: var(--chakra-colors-black_accent);

    span {
      font-size: 13px;
    }
  }

  tr {
    padding: 10px;
    &:hover {
      background-color: var(--chakra-colors-purple100);
      span, button > svg {
        color: var(--chakra-colors-black_accent);
      }

      td:first-child {
        border-top-left-radius: 10px; 
        border-bottom-left-radius: 10px;
      }
      td:last-child {
        border-bottom-right-radius: 10px; 
        border-top-right-radius: 10px; 
      }
    }
  }
  td:first-child {
      > svg {
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        padding: 10px;
        background: var(--chakra-colors-purple50);
      }
  }
 
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
