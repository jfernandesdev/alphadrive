import React from 'react';

import { 
  Box,
  Text, 
  Menu,
  Flex,
  Avatar, 
  Heading, 
  MenuButton, 
  MenuList, 
  MenuItem, 
  MenuDivider,
  Center
 } from '@chakra-ui/react';

import { FiChevronDown } from 'react-icons/fi';

const SideRight: React.FC = () => {
  return (
    <Box padding="30px" style={{background: '#f9f9f9'}}>
      
    <Menu>
      <MenuButton
        py={1}
        px={3}
        mt={-2}
        width='100%'
        transition="all 0.2s"
        borderRadius="lg"
        borderWidth="1px"
        textAlign="start"
        _focus={{ boxShadow: "outline" }}
      >
  
      <Flex justifyContent="space-between" alignItems="center">
        <Center>
          <Avatar 
            name="Fulano de Tal" 
            bg="line_dark"
            mr={3}
            src="https://randomuser.me/api/portraits/men/32.jpg"
          />
          <Flex direction="column">
            <Heading as="h6" size="xs" color="black_accent">Fulano de Tal</Heading >
            <Text fontSize="xs" color="gray">fulano@email.com</Text>
          </Flex>
        </Center>

        <FiChevronDown />
        
      </Flex>
    </MenuButton>
    
    <MenuList>
      <MenuItem>Settings</MenuItem>
      <MenuItem>Upgrade</MenuItem>
      <MenuDivider />
      <MenuItem>Logout</MenuItem>
    </MenuList>
    </Menu>
  </Box>
  );
}

export default SideRight;