import styled from 'styled-components';

export const BoxProfile = styled.div`
  padding: 30px;
  h6, p {
    grid-area: PB;
    max-width: 90%;
    padding-left: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  svg {
    min-width: 20px;
    margin-left: -20px;
  }  
`;