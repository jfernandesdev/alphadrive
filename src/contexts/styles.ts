import styled from 'styled-components';

// SideBar (SB)
// Content (CT)
// SideRight (SR)

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 260px auto 300px;
  grid-template-areas:  'SB CT SR';
  height: 100vh;

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
