import React from 'react';
import { Flex, Box, Heading, Text, Icon } from '@chakra-ui/react';
import type { IconType } from 'react-icons';

import { WrapperIcon } from './styles';

type CardCategoryProps = {
  title: string,
  icon: IconType,
  colorPrimary: string,
  numberOfFiles: number,
}

export const CardCategory: React.FC<CardCategoryProps> = ({ title, icon, colorPrimary, numberOfFiles }) => {
  return (
    <Flex 
      direction="column" 
      justifyContent="center" 
      height={150} 
      borderWidth={1} 
      borderRadius={15} 
      padding={15}
      my={3}
      cursor="pointer" 
      transition="box-shadow 0.2s"
      _hover={{ boxShadow: "0px 2px 10px rgba(0,0,0,0.1)" }}
      >
      <WrapperIcon>
      <Box style={{background: `var(--chakra-colors-${colorPrimary})` }} />
      <Icon as={icon} color={colorPrimary} />
      </WrapperIcon>

      <Heading as="h6" size="xs" mb={1}>{title}</Heading>
      <Text fontSize={11} color="gray">{numberOfFiles} files</Text>
    </Flex>
  );
}
