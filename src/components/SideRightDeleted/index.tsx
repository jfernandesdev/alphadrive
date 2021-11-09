import React from 'react';

import { 
  Text, 
  Box,
  Flex,
  Button,
  Square,
  List,
  ListItem,
  ListIcon,
  Icon,
  Wrap

 } from '@chakra-ui/react';


import { Container, WrapperTrash } from './styles';
import { HiOutlineTrash, VscCircleFilled } from '../../styles/Icons';

import { trashStatistic } from '../../utils/arrayTrashStatistic';

const SideRightDeleted: React.FC = () => {
  return (
    <Container>
      <WrapperTrash>

        <Box textAlign="center">
          <Square size="120px" bg="purple" color="white" borderRadius="10px" mb={4}>
            <HiOutlineTrash size={80}/>
          </Square>
          <Text><b>8.9</b> GB</Text>
        </Box>

        <Box width='100%' fontSize={13} color="var(--chakra-colors-black_accent);">
          {trashStatistic.map((item, index) => (
            <>
              <Flex key={index} justifyContent="space-between" alignItems="center" py={3}>
                <Flex alignItems="center" color={`var(--chakra-colors-${item.colorPrimary});`}>
                  <Icon as={VscCircleFilled} color="green.500" mr={2}/> 
                  <Text fontWeight="bold">{item.category}</Text>
                </Flex>
                <Text>{item.consumedSpace}</Text>
              </Flex>
            </>
          ))}
        </Box>

        <Button colorScheme="purple" bg="purple" color="white" width='100%' borderRadius="10px" fontWeight="100">Empty now</Button>
         
      </WrapperTrash>
    </Container>
  );
}

export default SideRightDeleted;