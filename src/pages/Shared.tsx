import { Box } from "@chakra-ui/react";
import { fileList } from '../utils/arrayFileList';
import { TabOfListOrGrid } from "../components/TabOfListOrGrid";

export const Shared = () => (
  <Box padding="0 40px">
    <TabOfListOrGrid 
      title='Shared'
      type='shared'
      list={fileList}
    />
  </Box>
)