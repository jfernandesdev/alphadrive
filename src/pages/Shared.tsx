import { Box, Heading } from "@chakra-ui/react";
import { TableFiles } from '../components/TableFiles';

import { fileList } from '../utils/arrayFileList';

export const Shared = () => (
  <Box padding="0 40px">
    <Heading as="h5" size="sm" mt={7}>Shared</Heading>
    <TableFiles type="shared" list={fileList}/>
  </Box>
 
)
