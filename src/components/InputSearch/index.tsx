import React from 'react';
import { InputGroup, Input, InputLeftElement } from '@chakra-ui/react';

import { Container } from './styles';
import { SortFilter } from '../SortFilter';
import { BsSearch } from '../../styles/Icons';

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
      
        <SortFilter />

      </InputGroup>
    </Container>
)}

export default InputSearch;