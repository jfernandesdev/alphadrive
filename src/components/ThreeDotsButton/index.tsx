import React from 'react';
import { 
  BsThreeDots,
  BsThreeDotsVertical, 
  BsDownload, 
  HiOutlineTrash, 
  HiOutlineStar, 
  HiOutlineShare, 
  AiOutlineLink, 
  AiOutlineEye, 
  FiCopy, 
  BiEditAlt
} from '../../styles/Icons';

import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react"

interface threeDotsButtonProps {
  isVertical ?: boolean;
}

export const ThreeDotsButton: React.FC<threeDotsButtonProps> = (props) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={props.isVertical ? <BsThreeDotsVertical /> : <BsThreeDots />}
        variant="outline"
        size={props.isVertical ? 'sm' : 'md'}
        border= {props.isVertical ? '1px' : 0}
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
  );
}