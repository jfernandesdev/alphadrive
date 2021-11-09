import React from 'react';

import { 
  BsImageFill, BsMusicNoteBeamed, BsCameraVideoFill, BsThreeDots, BsDownload,
  FaFile, FaFolder, HiOutlineTrash, HiOutlineStar, HiOutlineShare,
  AiFillFileUnknown, AiOutlineLink, AiOutlineEye, FiCopy, BiEditAlt
} from '../../styles/Icons';

import {
  Table,
  Tbody,
  Tr,
  Td,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  AvatarGroup,
  Avatar
} from "@chakra-ui/react"

import { WrapperTable } from './styles';


interface TableFileProps {
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

export const TableFiles: React.FC<TableFileProps> = ({type, list}) => {

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

  return (
    <WrapperTable style={{maxHeight: type == null ? '265px' : '65vh'}}>
      <Table>
        <Tbody>
          {list.map((item,index) => (
            <Tr key={index}>
              <Td width="40px">{slugToIconConverter(item.categorySlug)}</Td>
              <Td>
                <Heading as="h6" size="xs">
                  {item.fileName}
                </Heading>
              </Td>
              <Td color="gray"><span>{item.fileType}</span></Td>
             
              {(type == null || type == 'deleted') &&
                <Td isNumeric color="gray"><span>{item.fileSize} </span></Td>
              }

              {type == 'shared' &&
                <Td>
                  <AvatarGroup size="sm" max={3} borderColor="purple">
                  {item.shared && item.shared.map((element, index) => (
                    <Avatar key={element.username+index} name={element.username} src={element.avatar} bg="purple" color="white" borderWidth="1px"/>
                  ))} 
                  </AvatarGroup>
                </Td>
              }

              {type == 'starred' &&
                <Td>
                  <HiOutlineStar fill="#FFD12C" stroke="#FFD12C" size={20}/>
                </Td>
              }

              <Td isNumeric>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<BsThreeDots />}
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
              </Td>
            </Tr>
          ))}
      </Tbody>
      </Table>
    </WrapperTable>
  );
}