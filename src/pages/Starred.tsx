import { Box } from "@chakra-ui/react";
import { fileList } from '../utils/arrayFileList';
import { TabOfListOrGrid } from "../components/TabOfListOrGrid";

export const Starred = () => (
  <Box padding="0 40px">
    <TabOfListOrGrid 
      title='Starred'
      type='starred'
      list={fileList}
    />
  </Box>
)