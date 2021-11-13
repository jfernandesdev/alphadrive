import React from 'react';
import { Box, Text, Heading, CircularProgress,  CircularProgressLabel } from '@chakra-ui/react';

import { Container, WrapperCircularProgress, CardGoPremium } from './styles';
import {FaFolderPlus } from '../../styles/Icons';

import { ButtonAdd } from '../ButtonAdd';

export const SideRightDashboard: React.FC = () => {
  return (
    <Container>
      <ButtonAdd />

      <WrapperCircularProgress>
        <CircularProgress min={0} max={100} value={25} color="purple" size="175px" mb={3} capIsRound>
          <CircularProgressLabel><span>25%</span> <br />used </CircularProgressLabel>
        </CircularProgress>
        <Box>
          <span><b>769</b> GB <b>/</b> <b>1</b> TB</span><br />
          <Text color="gray" fontSize="sm" mt={1}>Available storage</Text>
        </Box>
      </WrapperCircularProgress>

      <CardGoPremium>
        <FaFolderPlus />
        <Heading as="h5" size="sm" color="var(--chakra-colors-dark_accent);">Go Premium</Heading>
        <Text color="gray" fontSize="sm">Upgrade space now and get a 15% discount</Text>
      </CardGoPremium>
    </Container>
  );
}