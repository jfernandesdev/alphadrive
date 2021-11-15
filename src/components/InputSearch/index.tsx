import React from 'react';
import { Box, Flex, InputGroup, Input, InputLeftElement } from '@chakra-ui/react';

import { Container} from './styles';
import { SortFilter } from '../SortFilter';
import { BsSearch, AiOutlineCloudServer } from '../../styles/Icons';
import { DrawerRight } from '../DrawerRight';

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

          <Box display={{base: 'block',  lg:'none'}}>
            <DrawerRight 
              iconButton={AiOutlineCloudServer} 
              contentBody='dashboard'
            />
          </Box>

        </InputGroup>
      </Flex>
    </Container>
)}

export default InputSearch;