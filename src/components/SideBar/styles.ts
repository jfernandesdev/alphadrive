import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-area: SB;
  display: flex;
  flex-direction: columns;
  padding: 30px 28px;
  background: var(--chakra-colors-purple50);

  @media(max-width: 768px) {
    background: var(--chakra-colors-white); 
    position: fixed;
    z-index: 999;
    width: 100%;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  > p {
    margin-left: 15px;
  }

  @media(max-width: 768px) {
    > img {
      width: 40px;
    }
    position: absolute;
    z-index:999;
    top: 25px;
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

  @media(max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    z-index: 999;
    display: flex;
    justify-content: space-around;
    background: var(--chakra-colors-purple50);
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

  @media(max-width: 768px) {
    &.isFooter {
      display: none;
    }

    &.isActive, &:hover{
      background: transparent;
      color: var(--chakra-colors-purple);

      > svg {
        fill: var(--chakra-colors-white);
      }
    }

    span {
      display: none;
    }

    > svg {
      font-size: 1.7em;
      margin: 0;
    } 
    padding: 0;
    width: 60px;
    height: 60px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px 0; 
  }
`;


