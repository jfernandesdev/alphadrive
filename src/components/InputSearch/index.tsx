import React from 'react';
import { Box, InputGroup, Input, InputLeftElement, IconButton } from '@chakra-ui/react';
import { BsSearch, HiAdjustments } from '../../styles/Icons';

import { Container } from './styles';

const InputSearch: React.FC = () => {
  return (
    <Container>
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
    </Container>
)}

export default InputSearch;