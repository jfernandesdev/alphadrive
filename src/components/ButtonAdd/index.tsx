import React from 'react';
import { Flex, Text, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

import { AddNewButton} from './styles';
import { HiPlus } from '../../styles/Icons';


export const ButtonAdd: React.FC = () => {
  return (
    <AddNewButton>
        <Menu>
          <MenuButton as={Button} colorScheme="var(--chakra-colors-purple);">
            <Flex justifyContent='center'>
              <Text>Add new</Text>  
              <HiPlus/>
            </Flex>
          </MenuButton>
          <MenuList ml={2} mt={-2}>
            <MenuItem>Upload files</MenuItem>
            <MenuItem>Upload folder</MenuItem>
            <MenuItem>New folder</MenuItem>
          </MenuList>
        </Menu>
    </AddNewButton>
  );
}