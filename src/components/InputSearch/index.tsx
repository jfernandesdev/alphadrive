import React from 'react';

import { 
  Box,
  InputGroup, 
  Input,
  InputLeftElement, 
  IconButton,
 } from '@chakra-ui/react';

import { BsSearch, HiAdjustments } from '../../styles/Icons';

const InputSearch: React.FC = () => {
  return (
    <>
    <Box padding="30px">
      
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<BsSearch color="var(--chakra-colors-dark_grey)" />}
      />
      <Input 
        type="search" 
        bg="var(--chakra-colors-purple50)"
        border={0}
        placeholder="Search" 
      />
    
      <IconButton
        colorScheme="var(--chakra-colors-purple);"
        aria-label="Ajustes"
        marginLeft={3}
        icon={<HiAdjustments />}
      />
    </InputGroup>
    </Box>

  
  </>
)}

export default InputSearch;