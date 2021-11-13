import React from 'react';
import { Text, Menu, Flex, Avatar, Heading, MenuButton, MenuList, MenuItem, MenuDivider,Center } from '@chakra-ui/react';

import { BoxProfile } from './styles';
import { FiChevronDown } from '../../styles/Icons';

import { useLayout  } from '../../contexts/LayoutContext';

export const ProfileButton: React.FC = () => {
  const {user} = useLayout();
  return (
    <BoxProfile>
      <Menu>
        <MenuButton
          py={1}
          px={{ base: "0", md: 3 }}
          mt={-2}
          width={{ base: "auto", md: "100%" }}
          transition="all 0.2s"
          borderRadius="lg"
          borderWidth={{ base: "0", md: "1px" }}
          textAlign="start"
          _focus={{ boxShadow: "outline" }}
        >
    
        <Flex justifyContent="space-between" alignItems="center">
          <Center>
            <Avatar 
              name={user.name}
              bg="line_dark"
              src={user.avatar}
            />
            <Flex direction="column">
              <Heading as="h6" size="xs" color="black_accent">{user.name}</Heading >
              <Text fontSize="xs" color="gray">{user.email}</Text>
            </Flex>
            <FiChevronDown />
          </Center>
        </Flex>
      </MenuButton>
      
      <MenuList>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Upgrade</MenuItem>
        <MenuDivider />
        <MenuItem>Logout</MenuItem>
      </MenuList>
      </Menu>
    </BoxProfile>
  );
}
