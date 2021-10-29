import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flex, Image,  Text } from '@chakra-ui/react';
import { Wrapper, Logo, MenuList, MenuItem } from './styles';

import { useLayout } from '../../contexts/LayoutContext';

import { 
  HiOutlineViewGrid, 
  HiOutlineShare, 
  HiOutlineStar, 
  HiOutlineTrash, 
  BsArrowBarLeft 
} from '../../styles/Icons';

import LogoImg from '../../assets/logo.svg';

const menuItensList = [
  {
    title: 'Dashboard',
    icon: <HiOutlineViewGrid />,
    url: '/dashboard'
  },
  {
    title: 'Shared',
    icon: <HiOutlineShare />,
    url: '/shared'
  },
  {
    title: 'Starred',
    icon: <HiOutlineStar />,
    url: '/starred'
  },
  {
    title: 'Deleted',
    icon: <HiOutlineTrash />,
    url: '/deleted'
  }
];

// interface SideBarPros {
//   isCollapsed?: boolean;
//   setIsCollapsed: (isCollapsed: boolean) => void; 
// }


const SideBar: React.FC = () => { 

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
          {menuItensList.map((item, index) => (
            <Link to={item.url} key={index}>          
              <MenuItem className={location.pathname === item.url ? "isActive" : ''}>
                {item.icon}
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

export default SideBar;