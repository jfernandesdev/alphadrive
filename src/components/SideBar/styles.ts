import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-area: SB;
  display: flex;
  flex-direction: columns;
  padding: 30px 28px;
  background: var(--chakra-colors-purple50);
  -webkit-transition: width 0.3s;
  transition: width 0.3s;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  > p {
    margin-left: 15px;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  max-height: 420px;
  overflow-y: scroll;
  padding-right: 5px;
  margin-top: -30px;
  

  &::-webkit-scrollbar{
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--chakra-colors-purple200);
    border-radius: 15px;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 50px 15px 20px;
  border-radius: 15px;
  color: var(--chakra-colors-black_accent);
  cursor: pointer;
  transition: background 0.2s color 0.2;
  margin-bottom: 15px; 

  > svg {
    font-size: 1.3em;
    margin-right: 15px;
  } 

  &.isActive {
    background: var(--chakra-colors-purple);
    color: var(--chakra-colors-white);

     > svg {
       fill: var(--chakra-colors-white);
     }
  }

  &.isFooter:hover{
    background: var(--chakra-colors-purple200);
    color: var(--chakra-colors-black_accent);

     > svg {
       fill: var(--chakra-colors-black_accent);
     }
  }

  &:hover {
    background: var(--chakra-colors-purple);
    color: var(--chakra-colors-white);

     > svg {
       fill: var(--chakra-colors-white);
     }
  }
`;


