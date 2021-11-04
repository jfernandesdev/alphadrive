import React from 'react';
import { Heading, Icon } from '@chakra-ui/react';

import type { IconType } from 'react-icons';

import { Card, WrapperIcon } from './styles';

type CardCategoryProps = {
  title: string,
  icon: IconType,
  colorPrimary: string,
  numberOfFiles: number,
}

export const CardCategory: React.FC<CardCategoryProps> = ({ title, icon, colorPrimary, numberOfFiles }) => {
  return (
    <Card>
      <WrapperIcon>
        <div style={{background: `var(--chakra-colors-${colorPrimary})` }} />
        <Icon as={icon} color={colorPrimary} />
      </WrapperIcon>

      <Heading as="h6" size="xs">{title}</Heading>
      <span>{numberOfFiles} files</span>
    </Card>
  );
}
