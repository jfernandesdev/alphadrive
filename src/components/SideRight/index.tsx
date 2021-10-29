import React from 'react';

import { 
  Box,
  Text, 
  Menu,
  Button,
  Flex,
  Avatar, 
  Heading, 
  MenuButton, 
  MenuList, 
  MenuItem, 
  MenuDivider,
  Center,
  CircularProgress,
  CircularProgressLabel
 } from '@chakra-ui/react';

import { BoxProfile, AddNewButton, WrapperCircularProgress, CardGoPremium } from './styles';
import { FiChevronDown, HiPlus, FaFolderPlus } from '../../styles/Icons';

import { useLayout  } from '../../contexts/LayoutContext';


const SideRight: React.FC = () => {
  const {user} = useLayout();
  return (
    <Box padding="30px">
      <BoxProfile>
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

  <AddNewButton>
    <Menu>
    <MenuButton as={Button} colorScheme="var(--chakra-colors-purple);">
      <span>Add new <HiPlus /></span>
    </MenuButton>
    <MenuList ml={2} mt={-2}>
      <MenuItem>Upload files</MenuItem>
      <MenuItem>Upload folder</MenuItem>
      <MenuItem>New folder</MenuItem>
    </MenuList>
  </Menu>
    </AddNewButton>


   
    <WrapperCircularProgress>
      <CircularProgress min={0} max={100} value={25} color="purple" size="175px" mb={3} capIsRound>
        <CircularProgressLabel><span>25%</span> <br />used </CircularProgressLabel>
      </CircularProgress>

      <Box>
        <span><b>769</b> GB <b>/</b> <b>1</b> TB</span><br />
        <Text color="gray" fontSize="sm" mt={1}>Available storage</Text>
      </Box>
    </WrapperCircularProgress>


    <CardGoPremium>
      <FaFolderPlus />
      <Heading as="h5" size="sm" color="var(--chakra-colors-dark_accent);">Go Premium</Heading>
      <Text color="gray" fontSize="sm">Upgrade space now and get a 15% discount</Text>
    </CardGoPremium>

   
    
  </Box>
  );
}

export default SideRight;