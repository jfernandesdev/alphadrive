import styled from 'styled-components';

export const BoxProfile = styled.div`
  h6, p {
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

export const AddNewButton = styled.div`
  width: 100%;
  padding: 20px 0;

  > button {
    width: 100%;
    font-weight: 300;
    border-radius: 10px;

    span {
      display: inline-flex;
      justify-content: center;

      svg {
        margin-left: 10px;
      }
    }
  }
`;

export const WrapperCircularProgress = styled.div`
  background: var(--chakra-colors-purple50);
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: var(--chakra-colors-grey);
  border-radius: 20px;
  padding: 10px 20px;

  svg {
    margin-left: auto;
    margin-right: auto;
  }

  b {
    color: var(--chakra-colors-dark_accent);
  }

  .chakra-progress__track{
   stroke: #E9E4FF;
  }

  .chakra-progress {
    /* display: flex;
    justify-content: start;
    align-items: start; */
    > div {
      span {
        font-size: 30px;
        color: var(--chakra-colors-dark_accent);
        font-weight: bold;
      }
      font-size: 16px;
      color: var(--chakra-colors-grey);
    }
  }
`;

export const CardGoPremium = styled.div`
  background: var(--chakra-colors-purple200);
  padding: 20px;
  border-radius: 20px;
  margin-top: 20px;

  h5 {
    margin-bottom: 10px;
  }

  > svg {
    fill: var(--chakra-colors-white);
    background: var(--chakra-colors-purple);
    width: 60px;
    height: 60px;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
`;