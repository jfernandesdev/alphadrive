import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import { CardCategory } from '../components/CardCategory';
import { TableFiles } from "../components/TableFiles";
import { SideRightDashboard } from "../components/SideRightDashboard";

import { categoryList } from '../utils/arrayCategoryList';
import { fileList } from '../utils/arrayFileList';

import styled from 'styled-components';

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
        <SimpleGrid columns={4} spacing={5}>
          {categoryList.map((item, index) => (
              <CardCategory 
                key={index}
                title={item.title}
                icon={item.icon}
                colorPrimary={item.colorPrimary}
                numberOfFiles={item.numberOfFiles}
            />
            ))}
        </SimpleGrid>

        <Heading as="h5" size="sm" mt={7}>Recent</Heading>
        <TableFiles list={fileList} />
      </Box>

      <SideRightDashboard />
    
    </Container>
  );
}