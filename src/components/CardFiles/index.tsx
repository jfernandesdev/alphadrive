import React from 'react';
import { useLayout } from '../../contexts/LayoutContext';

import { 
  BsImageFill, BsMusicNoteBeamed, BsCameraVideoFill, BsThreeDotsVertical, BsDownload,
  FaFile, FaFolder, HiOutlineTrash, HiOutlineStar, HiOutlineShare,
  AiFillFileUnknown, AiOutlineLink, AiOutlineEye, FiCopy, BiEditAlt
} from '../../styles/Icons';

import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  AvatarGroup,
  Avatar,
  SimpleGrid,
  Box,
  Center,
  Flex,
  Text
} from "@chakra-ui/react"

import { WrapperCards } from './styles';


interface CardFileProps {
  type?: string,
  list: {
    id: number,
    categorySlug: string,
    fileName: string,
    fileType: string,
    fileSize: string,
    fileUrl: string,

    isDeleted?: boolean,
    isStarred?: boolean,
    shared?: { username: string, avatar: string }[]
  }[];
}

export const CardFiles: React.FC<CardFileProps> = ({type, list}) => {

  function slugToIconConverter(slug: string) {
    switch(slug){
      case 'image': 
        return <BsImageFill color='var(--chakra-colors-red)' />
      break;
      case 'document': 
        return <FaFile color='var(--chakra-colors-blue)' />
      break;
      case 'audio': 
        return <BsMusicNoteBeamed color='var(--chakra-colors-yellow)'/>
      break;
      case 'video': 
        return <BsCameraVideoFill color='var(--chakra-colors-green)'/>
      break;
      case 'folder': 
        return <FaFolder color='var(--chakra-colors-orange)'/>
      break;
      default: 
        return <AiFillFileUnknown color='var(--chakra-colors-puple)'/>
      break;
    }
  }

  const { isCollapsed } = useLayout();

  return (
    <WrapperCards style={{maxHeight: type == null ? '265px' : '65vh'}}>

    <SimpleGrid columns={isCollapsed ? 4 : 3} spacing={5}>
    {list.map((item,index) => (
      <Box key={index} height={150} borderWidth={1} borderRadius={15} padding={15}>
        <Center background='var(--chakra-colors-purple50);' width="40px" height="40px" borderRadius="10px">
          {slugToIconConverter(item.categorySlug)}
        </Center>
        <Flex justifyContent="space-between">
          <Box>
            <Heading as="h6" size="xs" mt={3} color="var(--chakra-colors-black_accent);">{item.fileName}</Heading>
            <Text color="gray" fontSize="xs"> {item.fileType}</Text>

            {type == 'shared' &&
              <AvatarGroup size="xs" max={3} borderColor="purple">
              {item.shared && item.shared.map((element, index) => (
                <Avatar key={element.username+index} name={element.username} src={element.avatar} bg="purple" color="white" borderWidth="1px"/>
              ))} 
              </AvatarGroup>
            }

            {type == 'starred' &&
              <HiOutlineStar fill="#FFD12C" stroke="#FFD12C" size={20}/>
            }

            {type == 'deleted' &&
             <Text color="gray" fontSize="xs"> {item.fileSize}</Text>
            }

          </Box>

          <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<BsThreeDotsVertical />}
              variant="outline"
              border={0}
            />
            <MenuList minW={0}>
              <MenuItem icon={<HiOutlineShare />}> Share </MenuItem>
              <MenuItem icon={<AiOutlineLink />}> Get Link </MenuItem>
              <MenuItem icon={<BsDownload />}> Download </MenuItem>
              <MenuItem icon={<BiEditAlt />}> Rename </MenuItem>
              <MenuItem icon={<FiCopy />}> Copy </MenuItem>
              <MenuItem icon={<HiOutlineTrash />}> Delete </MenuItem>
              <MenuItem icon={<HiOutlineStar />}> Star </MenuItem>
              <MenuItem icon={<AiOutlineEye />}> View detail </MenuItem>
            </MenuList>
          </Menu>
          </Box>
        </Flex>
      </Box>
    ))}
    </SimpleGrid>
    </WrapperCards>
  );
}