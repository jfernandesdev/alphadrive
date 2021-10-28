import { Box, Flex, Heading, Text, Icon } from "@chakra-ui/react";

import { BsImageFill, BsMusicNoteBeamed, BsCameraVideoFill } from 'react-icons/bs';
import { FaFile } from 'react-icons/fa';

import { CardCategory } from '../components/CardCategory';

const categoryList = [
  {
    title: "Images",
    numberOfFiles: 437,
    icon: BsImageFill,
    colorPrimary: 'red'
  },
   {
    title: "Documents",
    numberOfFiles: 212,
    icon: FaFile,
    colorPrimary: 'blue' 
   },
 {
   title: "Audio",
   numberOfFiles: 98,
   icon: BsMusicNoteBeamed,
   colorPrimary: 'yellow'
 },
 {
   title: "Images",
   numberOfFiles: 560,
   icon: BsCameraVideoFill,
   colorPrimary: 'green' 
 },
 
 ]
export function Dashboard() {
  return(
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
    </Box>
    
  );
}

