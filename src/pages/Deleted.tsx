import { Box } from "@chakra-ui/react";
import { SideRightDeleted } from "../components/SideRightDeleted";
import { TabOfListOrGrid } from "../components/TabOfListOrGrid";

import { fileList } from '../utils/arrayFileList';
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 300px;
  grid-area: 'CT SR';
`;

export const Deleted = () => (
  <Container>
    <Box padding="0 10px 0 30px">
      <TabOfListOrGrid 
        title='Deleted Files'
        type='deleted'
        alert='Item in trash are deleted forever after 30 days'
        list={fileList}
      />
    </Box>
    <SideRightDeleted />
  </Container>
)