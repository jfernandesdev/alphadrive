import React from 'react';
import { Heading, AvatarGroup, Avatar, SimpleGrid, Box, Center, Flex, Text } from "@chakra-ui/react"

import { SlugToIconConverter } from '../SlugToIconConverter';
import { ThreeDotsButton } from '../ThreeDotsButton';

import { WrapperCards } from './styles';
import {  HiOutlineStar } from '../../styles/Icons';

import { useLayout } from '../../contexts/LayoutContext';
import { ListOfFileProps } from '../TableFiles';

export const CardFiles: React.FC<ListOfFileProps> = ({type, list}) => {
  
  const { isCollapsed } = useLayout();

  return (
    <WrapperCards style={{maxHeight: type == null ? '265px' : '65vh'}}>
      <SimpleGrid columns={isCollapsed ? 4 : 3} spacing={5}>
        {list.map((item,index) => (
          <Box key={index} height={120} borderWidth={1} borderRadius={15} padding={15}>
            <Flex alignItems='center' justifyContent="space-between">
              <Center background='var(--chakra-colors-purple50);' width="40px" height="40px" borderRadius="10px">
                {SlugToIconConverter(item.categorySlug)}
              </Center>
              {type === 'shared' &&
                <AvatarGroup size="xs" max={3} borderColor="purple"  fontSize={10} spacing={-2}>
                {item.shared && item.shared.map((element, index) => (
                  <Avatar key={element.username+index} name={element.username} src={element.avatar} bg="purple" color="white" borderWidth="1px"/>
                ))} 
                </AvatarGroup>
              }
            </Flex>

            <Flex alignItems="center" justifyContent="space-between">
              <Box>
                <Heading as="h6" size="xs" mt={3} color="var(--chakra-colors-black_accent);">{item.fileName}</Heading>
                <Text color="gray" fontSize={11} mt={1} display="flex" alignItems="center"> 
                  {item.fileType} 
                  {type === 'deleted' && ' • ' + item.fileSize} 
                  {type === 'starred' && (
                    <Flex>
                      <Text px={1}> • </Text>
                      <HiOutlineStar fill="#FFD12C" stroke="#FFD12C" size={15} />
                    </Flex>
                    )}
                </Text>
              </Box>
              <Box>
                <ThreeDotsButton isVertical/>
              </Box>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </WrapperCards>
  );
}