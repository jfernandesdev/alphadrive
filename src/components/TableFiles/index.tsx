import React from 'react';
import { Table, Tbody, Tr, Td, Heading, AvatarGroup, Avatar } from "@chakra-ui/react"

import { ThreeDotsButton } from '../ThreeDotsButton';
import { SlugToIconConverter } from '../SlugToIconConverter';

import { HiOutlineStar } from '../../styles/Icons';
import { WrapperTable } from './styles';

export interface ListOfFileProps {
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

export const TableFiles: React.FC<ListOfFileProps> = ({type, list}) => {
  return (
    <WrapperTable style={{maxHeight: type == null ? '35vh' : '65vh'}}>
      <Table>
        <Tbody>
          {list.map((item,index) => (
            <Tr key={index}>
              <Td width="30px"> {SlugToIconConverter(item.categorySlug)} </Td>
              <Td> <Heading as="h6" size="xs"> {item.fileName} </Heading> </Td>
              <Td color="gray" display={{ base: "none", md: "revert" }}><span>{item.fileType}</span></Td>

              {(type == null || type === 'deleted') &&
                <Td isNumeric color="gray" display={{ base: "none", md: "revert" }}> <span>{item.fileSize} </span> </Td>
              }
              {type === 'shared' &&
                <Td>
                  <AvatarGroup size="sm" max={3} borderColor="purple">
                  {item.shared && item.shared.map((element, index) => (
                    <Avatar key={element.username+index} name={element.username} src={element.avatar} bg="purple" color="white" borderWidth="1px"/>
                  ))} 
                  </AvatarGroup>
                </Td>
              }
              {type === 'starred' &&
                <Td>
                  <HiOutlineStar fill="#FFD12C" stroke="#FFD12C" size={20}/>
                </Td>
              }
              <Td isNumeric>
                <ThreeDotsButton />
              </Td>
            </Tr>
          ))}
      </Tbody>
      </Table>
    </WrapperTable>
  );
}