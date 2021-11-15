import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flex, Image, Text, Icon } from '@chakra-ui/react';

import { useLayout } from '../../contexts/LayoutContext';
import { menuItems } from '../../utils/arrayMenuItems';

import { BsArrowBarLeft } from '../../styles/Icons';
import LogoImg from '../../assets/logo.svg';
import { Wrapper, Logo, MenuList, MenuItem } from './styles';


export const MenuItems: React.FC = () => { 
  const { isCollapsed, setIsCollapsed } = useLayout();
  const location = useLocation();

  return ( 
    <Wrapper className="sidebar">
      <Flex direction="column" justifyContent="space-between">
        <Logo>
          <Image src={LogoImg} alt="Alpha Drive" boxSize="50px" />
          <Text>Alpha Drive</Text>
        </Logo>

        <MenuList>
          {menuItems.map((item, index) => (
            <Link to={item.url} key={index}>          
              <MenuItem className={location.pathname === item.url ? "isActive" : ''}>
                <Icon as={item.icon} />
                <span>{item.title}</span>
              </MenuItem>
            </Link>
          ))}
        </MenuList>

        <MenuItem className="isFooter" onClick={() => setIsCollapsed(!isCollapsed)}>
          <BsArrowBarLeft />
          <span>Collapse</span>
        </MenuItem>
      </Flex>
    </Wrapper>
  );
}