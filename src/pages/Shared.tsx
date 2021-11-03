import { Box, Heading } from "@chakra-ui/react";
import { TableFiles } from '../components/TableFiles';

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
  },
  {
    id: 6,
    categorySlug: 'document',
    fileName: 'My Report.docx',
    fileType: 'DOCX File',
    fileSize: '7 MB',
    fileUrl: '#' 
  },
  {
    id: 7,
    categorySlug: 'audio',
    fileName: 'Backsound.mp3',
    fileType: 'MP3 File',
    fileSize: '5.6 MB',
    fileUrl: '#' 
  },
  {
    id: 8,
    categorySlug: 'image',
    fileName: 'Backsound.mp3',
    fileType: 'MP3 File',
    fileSize: '5.6 MB',
    fileUrl: '#' 
  },
  {
    id: 9,
    categorySlug: 'video',
    fileName: 'Final Present.mp4',
    fileType: 'MP4 File',
    fileSize: '154 MB',
    fileUrl: '#' 
  },
  {
    id: 10,
    categorySlug: 'folder',
    fileName: 'Work',
    fileType: 'Folder',
    fileSize: '8.9 GB',
    fileUrl: '#' 
  }
]

export const Shared = () => (
  <Box padding="0 40px">
    <Heading as="h5" size="sm" mt={7}>Shared</Heading>
    <TableFiles type="shared" list={recentList}/>
  </Box>
 
)
