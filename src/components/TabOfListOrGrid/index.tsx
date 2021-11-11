import React from 'react';
import { Tabs, Flex, Heading, TabList, Tab, Box, Alert, AlertDescription, CloseButton, TabPanels, TabPanel, Icon } from "@chakra-ui/react";
import { TableFiles } from '../TableFiles';
import { CardFiles } from '../CardFiles';

import { BsGridFill, FiList } from '../../styles/Icons';

interface tabOfListOrGridProps {
  title: string;
  type: string;
  alert ?: string;
  list: {
    id: number,
    categorySlug: string,
    fileName: string,
    fileType: string,
    fileSize: string,
    fileUrl: string,
    isDeleted?: boolean,
    isStarred?: boolean,
    shared?: { username: string, avatar: string }[]
  }[];
}

export const TabOfListOrGrid: React.FC<tabOfListOrGridProps> = ({title, type, alert, list}) => {
  return (
    <Tabs variant="soft">
      <Flex alignItems='center' justifyContent="space-between" py={2}>
        <Heading as="h5" size="sm">{title}</Heading>
        
        <TabList pr={5}>
          {[FiList, BsGridFill].map((item, index) => (
            <Tab key={index} borderRadius="10px"  p={2}  _selected={{ color: "white", bg: "purple" }} > 
              <Icon as={item} />
            </Tab>
          ))}
        </TabList>
      </Flex>
        
      {alert && 
      <Box px={5}>
        <Alert status="info" borderRadius={5} padding={3} fontSize={14} bg="#DDEFFD" color="var(--chakra-colors-blue);">
          <AlertDescription>{alert}</AlertDescription>
          <CloseButton position="absolute" right="10px"/>
        </Alert>
      </Box>
      }

      <TabPanels>
        <TabPanel>
          <TableFiles type={type} list={list}/>
        </TabPanel>
        <TabPanel>
          <CardFiles type={type} list={list}/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
