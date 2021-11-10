import { Box, Heading, Flex, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { TableFiles } from '../components/TableFiles';
import { CardFiles } from '../components/CardFiles';

import { BsGridFill, FiList } from '../styles/Icons';

import { fileList } from '../utils/arrayFileList';

export const Shared = () => (
  <Box padding="0 40px">
    
    <Tabs variant="soft">
      <Flex alignItem='center' justifyContent="space-between" py={2}>
        <Box>
          <Heading as="h5" size="sm">Shared</Heading>
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

      <TabPanels>
        <TabPanel>
        <TableFiles type="shared" list={fileList}/>
        </TabPanel>
        <TabPanel>
        <CardFiles type="shared" list={fileList}/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
 
)
