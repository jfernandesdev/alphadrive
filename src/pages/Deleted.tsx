import { Alert, AlertDescription, AlertIcon, Box, CloseButton, Heading,  Flex, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import styled from "styled-components";
import SideRightDeleted from "../components/SideRightDeleted";

import { TableFiles } from '../components/TableFiles';
import { CardFiles } from '../components/CardFiles';

import { fileList } from '../utils/arrayFileList';

import { BsGridFill, FiList } from '../styles/Icons';


const Container = styled.div`
  display: grid;
  grid-template-columns: auto 300px;
  grid-area: 'CT SR';
`;

export const Deleted = () => (
  <Container>
    <Box padding="0 10px 0 30px">
    <Tabs variant="soft">
      <Flex alignItem='center' justifyContent="space-between" py={2}>
        <Box>
          <Heading as="h5" size="sm">Deleted Files</Heading>
        </Box>

        <Box>
        <TabList pr={5}>
        <Tab _selected={{ color: "white", bg: "purple" }} borderRadius="10px" p={2}> 
          <FiList size={20}/>
        </Tab>
        <Tab _selected={{ color: "white", bg: "purple" }} borderRadius="10px" p={2}>
          <BsGridFill size={20}/>
        </Tab>
      </TabList>
        </Box>
      </Flex>

      <Box px={5} >
        <Alert 
          status="info" 
          borderRadius={5} 
          padding={3}
          fontSize={14}
          bg="#DDEFFD" 
          color="var(--chakra-colors-blue);"
          >
          <AlertDescription>Item in trash are deleted forever after 30 days</AlertDescription>
          <CloseButton position="absolute" right="10px"/>
        </Alert>
      </Box>

      <TabPanels>
        <TabPanel>
        <TableFiles type="deleted" list={fileList}/>
        </TabPanel>
        <TabPanel>
        <CardFiles type="deleted" list={fileList}/>
        </TabPanel>
      </TabPanels>
    </Tabs>
    </Box>

    <SideRightDeleted />
  </Container>
)
