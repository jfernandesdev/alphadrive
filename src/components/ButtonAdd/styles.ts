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
      width: 80px;
      height: 80px;
      font-size: 60px;
      border-radius: 50px;
      position: fixed;
      top: calc(100% - 125px);
      z-index: 999;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      border: 10px solid #FFF;

      p {
        display: none;
      }

      svg {
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`;
