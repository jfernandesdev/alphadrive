import React from 'react';
import {
  useDisclosure, 
  IconButton,
  Button, 
  Drawer, 
  DrawerBody, 
  DrawerCloseButton, 
  DrawerContent, 
  DrawerFooter, 
  DrawerHeader, 
  DrawerOverlay,
  Text, 
  Flex,
  Icon,
  MenuDivider,
  Stack,
  RadioGroup,
  Radio
} from '@chakra-ui/react';

import { HiAdjustments } from '../../styles/Icons';

export const SortFilter: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
 
  return (
    <>
      <IconButton
        colorScheme="var(--chakra-colors-purple);"
        aria-label="Ajustes"
        marginLeft={3}
        icon={<HiAdjustments />}
        onClick={onOpen}
      />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} >
        <DrawerOverlay />

        <DrawerContent pt={5}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex alignItems="center" ><Icon as={HiAdjustments} mr={3} /> Sort & Filter</Flex>
          </DrawerHeader>

          <DrawerBody>
            <Text my={5} fontWeight="medium">Sort by</Text>

            <RadioGroup colorScheme="var(--chakra-colors-purple);" defaultValue="date-modified">
              <Stack spacing={5} direction="column">
                <Radio value="date-modified">Date modified</Radio>
                <Radio value="date-created">Date created</Radio>
                <Radio value="name">Name</Radio>
                <Radio value="size">Size</Radio>
              </Stack>
            </RadioGroup>
            
            <MenuDivider my={5}/>

            <RadioGroup colorScheme="var(--chakra-colors-purple);" defaultValue="asc">
              <Stack spacing={5} direction="column">
                <Radio value="asc">Ascending</Radio>
                <Radio value="desc">Descending</Radio>
              </Stack>
            </RadioGroup>
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme="purple" bg="purple" color="white" width='100%'>Apply</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
