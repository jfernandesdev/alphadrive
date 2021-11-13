import React from 'react';
import { Flex, InputGroup, Input, InputLeftElement, IconButton } from '@chakra-ui/react';

import { Container} from './styles';
import { SortFilter } from '../SortFilter';
import { BsSearch, AiOutlineCloudServer } from '../../styles/Icons';

const InputSearch: React.FC = () => {
  return (
    <Container>
      <Flex alignItems='center'>

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


          <IconButton
            variant="outline"
            color='gray'
            ml={2}
            colorScheme="gray"
            aria-label="Available Storage"
            icon={<AiOutlineCloudServer size={23}/>}
          />

        </InputGroup>
      </Flex>
    </Container>
)}

export default InputSearch;