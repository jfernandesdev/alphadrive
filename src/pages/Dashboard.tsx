import { Box, Flex, Heading } from "@chakra-ui/react";

import { BsImageFill, BsMusicNoteBeamed, BsCameraVideoFill, FaFile } from '../styles/Icons';

import { CardCategory } from '../components/CardCategory';
import TableFiles from "../components/TableFiles";

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
   title: "Audios",
   numberOfFiles: 98,
   icon: BsMusicNoteBeamed,
   colorPrimary: 'yellow'
 },
 {
   title: "Videos",
   numberOfFiles: 560,
   icon: BsCameraVideoFill,
   colorPrimary: 'green' 
 },
 
]

const recentList = [
  {
    id: 1,
    categorySlug: 'document',
    fileName: 'My Report.docx',
    fileType: 'DOCX File',
    fileSize: '7 MB',
    fileUrl: '#' 
  },
  {
    id: 2,
    categorySlug: 'audio',
    fileName: 'Backsound.mp3',
    fileType: 'MP3 File',
    fileSize: '5.6 MB',
    fileUrl: '#' 
  },
  {
    id: 3,
    categorySlug: 'image',
    fileName: 'Backsound.mp3',
    fileType: 'MP3 File',
    fileSize: '5.6 MB',
    fileUrl: '#' 
  },
  {
    id: 4,
    categorySlug: 'video',
    fileName: 'Final Present.mp4',
    fileType: 'MP4 File',
    fileSize: '154 MB',
    fileUrl: '#' 
  },
  {
    id: 5,
    categorySlug: 'folder',
    fileName: 'Work',
    fileType: 'Folder',
    fileSize: '8.9 GB',
    fileUrl: '#' 
  }
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

      <Heading as="h5" size="sm" mt={7}>Recent</Heading>


      <TableFiles list={recentList}/>

    </Box>
    
  );
}

