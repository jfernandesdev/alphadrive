import styled from 'styled-components';

export const AddNewButton = styled.div`
  width: 100%;
  padding: 20px 0;

  > button {
    width: 100%;
    font-weight: 300;
    border-radius: 10px;

    svg {
      margin-left: 10px;
    }
  }

  @media(max-width: 768px) {
    > button {
      width: 60px;
      height: 60px;
      font-size: 60px;
      border-radius: 50px;

      p {
        display: none;
      }
    }
  }
`;
