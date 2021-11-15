import React from 'react';
import { IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody } from '@chakra-ui/react';

import {CardAvailableStorage } from '../CardAvailableStorage';
import { TrashStatistics } from '../TrashStatistics';
import type { IconType } from 'react-icons';

interface drawerRightProps { 
  iconButton: IconType;
  contentBody: string;
}

export const DrawerRight: React.FC<drawerRightProps> = ({iconButton, contentBody}) => {
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  var contentDrawer;

  if(contentBody === 'dashboard')
    contentDrawer = <CardAvailableStorage />
   else if (contentBody === 'deleted')
    contentDrawer = <TrashStatistics />
  
  return (
    <>
      <IconButton
        variant="outline"
        color='gray'
        ml={2}
        cursor="pointer"
        colorScheme="gray"
        aria-label="Available Storage"
        as={iconButton}
        p={1.5}
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody p={8} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          {/* <TrashStatistics /> */}
          {contentDrawer}
            {/* <CardAvailableStorage /> */}
          {/* {{
            switch(contentBody) {
              case 'dashboard':
                return 
              case 'deleted':
                return 
              }
          }} */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
