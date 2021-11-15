import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import { CardCategory } from '../components/CardCategory';
import { TableFiles } from "../components/TableFiles";
import { ButtonAdd } from '../components/ButtonAdd';
import { CardAvailableStorage } from '../components/CardAvailableStorage';

import { categoryList } from '../utils/arrayCategoryList';
import { fileList } from '../utils/arrayFileList';

import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 300px;
  grid-area: 'CT SR';

  @media(max-width: 768px) {
    grid-template-columns: 100vw;
    grid-area: 'CT';
  }
`;

const WrapperCards = styled.div`
  @media(max-width: 768px) {
    overflow-x: scroll;
    max-width: 100vw;

  > div {
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-flow: column;
  }
    .cardCategory { 
      min-width: 125px;
    }
  }
`;

export function Dashboard() {
  return(
    <Container>
      <Box padding={{ base: "0px 30px 30px 30px", md: "30px" }}>
        <Heading as="h5" size="sm">Category</Heading>
        <WrapperCards>
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
        </WrapperCards>

        <Heading as="h5" size="sm" mt={7}>Recent</Heading>
        <TableFiles list={fileList} />
      </Box>

      <Box width='300px' padding="0px 30px">
        <ButtonAdd />
        <CardAvailableStorage />
      </Box>
    
    </Container>
  );
}