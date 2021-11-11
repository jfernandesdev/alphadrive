import { Box, Flex, Heading } from "@chakra-ui/react";
import styled from 'styled-components';
import { CardCategory } from '../components/CardCategory';
import SideRightDashboard from "../components/SideRightDashboard";
import { TableFiles } from "../components/TableFiles";

import { categoryList } from '../utils/arrayCategoryList';
import { fileList } from '../utils/arrayFileList';

const Container = styled.div`
display: grid;
grid-template-columns: auto 300px;
grid-area: 'CT SR';
`;

export function Dashboard() {
  return(
    <Container>
      <Box padding="30px">
      <Heading as="h5" size="sm">Category</Heading>
    <Flex justifyContent="space-between">
     {categoryList.map((item, index) => (
       <CardCategory 
        key={index}
        title={item.title}
        icon={item.icon}
        colorPrimary={item.colorPrimary}
        numberOfFiles={item.numberOfFiles}
       />
     ))}
      </Flex>

      <Heading as="h5" size="sm" mt={7}>Recent</Heading>

      <TableFiles list={fileList} />
    </Box>

     <SideRightDashboard />
    </Container>
  );
}

