import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid var(--chakra-colors-line_dark);
  border-radius: 12px;
  width: 150px;
  min-height: 150px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 15px;
  transition: box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 12px rgba(0,0,0,0.1);
  }
  > h6 { 
    margin-bottom: 5px;
  }
  > span {
    color: gray;
    font-size: 11px;
  }
`;

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