import styled from 'styled-components';

// SideBar (SB)
// Input Search (SH)
// Content (CT)
// Profile Button (PB)
// SideRight (SR)

export const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 260px auto 300px;
  grid-template-rows: 100px auto;
  grid-template-areas:  
  'SB SH PB'
  'SB CT CT'
  ;

  @media(max-width: 768px) {
    grid-template-columns: 100vw;
    grid-template-rows: 90px 80px auto;
    grid-template-areas:  
    'SB PB'
    'SH SH'
    'CT CT'
    ;
    overflow-y: scroll;
    padding-bottom: 50px;
  }

  &.menuIsCollapsed {
    grid-template-columns: 100px auto 300px;

    .sidebar {
      li {
        padding: 16px;
        justify-content: center;

        > svg {
          margin: 0;
        }

        &.isFooter {
          svg {
            transform: rotate(-180deg);
          }
        }
      }

      p, span {
        display: none;
      }
    }
  } 
`;


export const Container = styled.div`
  grid-area: CT;
`;
