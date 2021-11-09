import { Alert, AlertDescription, AlertIcon, Box, CloseButton, Heading } from "@chakra-ui/react";
import styled from "styled-components";
import SideRightDeleted from "../components/SideRightDeleted";
import { TableFiles } from '../components/TableFiles';

import { fileList } from '../utils/arrayFileList';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 300px;
  grid-area: 'CT SR';
`;

export const Deleted = () => (
  <Container>
    <Box padding="0 30px">
      <Heading as="h5" size="sm" mt={7}>Deleted Files</Heading>

      <Box padding={5} >
        <Alert 
          status="info" 
          borderRadius={5} 
          padding={5}
          bg="#DDEFFD" 
          color="var(--chakra-colors-blue);"
          >
          <AlertDescription>Item in trash are deleted forever after 30 days</AlertDescription>
          <CloseButton position="absolute" right="10px"/>
        </Alert>
      </Box>
    
      <TableFiles type="deleted" list={fileList}/>
    </Box>

    <SideRightDeleted />
  </Container>
)
