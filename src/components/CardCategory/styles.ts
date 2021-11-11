import styled from 'styled-components';

export const WrapperIcon = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 12px;
    opacity: 0.12;
  }
  
  > svg {
    position: absolute;
    width: 30px;
    height: 30px;
  }
`;