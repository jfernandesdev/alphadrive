import React, { useState } from 'react';

import SideBar from '../SideBar';
import Content from '../Content';
import SideRight from '../SideRight';

import { Grid } from './styles';


const Layout: React.FC = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Grid className={isCollapsed ? 'menuIsCollapsed' : ''}>
      <SideBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <Content {...props} />
      <SideRight />
    </Grid>
  );
}

export default Layout;