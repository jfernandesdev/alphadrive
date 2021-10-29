import React from 'react';

import { BsImageFill, BsMusicNoteBeamed, BsCameraVideoFill, BsThreeDots, BsDownload } from 'react-icons/bs';
import { FaFile, FaFolder } from 'react-icons/fa';
import { AiFillFileUnknown, AiOutlineLink, AiOutlineEye } from 'react-icons/ai';
import { FiCopy, FiTrash2, FiStar } from 'react-icons/fi';
import { BiEditAlt, BiShareAlt } from 'react-icons/bi';

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
  Heading
} from "@chakra-ui/react"

import { WrapperTable } from './styles';


interface TableFileProps {
  list: {
    id: number,
    categorySlug: string,
    fileName: string,
    fileType: string,
    fileSize: string,
    fileUrl: string
  }[];
}

const TableFiles: React.FC<TableFileProps> = ({list}) => {

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
    <WrapperTable>
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
              <Td isNumeric color="gray"><span>{item.fileSize}</span></Td>
              <Td isNumeric>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<BsThreeDots />}
                  variant="outline"
                  border={0}
                />
                <MenuList>
                  <MenuItem icon={<BiShareAlt />}> Share </MenuItem>
                  <MenuItem icon={<AiOutlineLink />}> Get Link </MenuItem>
                  <MenuItem icon={<BsDownload />}> Download </MenuItem>
                  <MenuItem icon={<BiEditAlt />}> Rename </MenuItem>
                  <MenuItem icon={<FiCopy />}> Copy </MenuItem>
                  <MenuItem icon={<FiTrash2 />}> Delete </MenuItem>
                  <MenuItem icon={<FiStar />}> Star </MenuItem>
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

export default TableFiles;