import styled from 'styled-components';

export const WrapperIcon = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    margin-left: 25px;
    min-width: 60px;
    height: 60px;
    border-radius: 12px;
    opacity: 0.12;
  }
  
  > svg {
    transform: translateX(-150%);
    width: 30px;
    height: 30px;
  }
`;