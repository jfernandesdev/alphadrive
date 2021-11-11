import { 
  BsImageFill, 
  BsMusicNoteBeamed, 
  BsCameraVideoFill,
  FaFile, 
  FaFolder,
  AiFillFileUnknown,
} from '../../styles/Icons';

export function SlugToIconConverter(slug : string) {
  switch(slug) {
    case 'image': 
      return <BsImageFill color='var(--chakra-colors-red)' />
    case 'audio': 
      return <BsMusicNoteBeamed color='var(--chakra-colors-yellow)'/>
    case 'video': 
      return <BsCameraVideoFill color='var(--chakra-colors-green)'/>
    case 'document': 
      return <FaFile color='var(--chakra-colors-blue)' />
    case 'folder': 
      return <FaFolder color='var(--chakra-colors-orange)'/>
    default: 
      return <AiFillFileUnknown color='var(--chakra-colors-purple)'/>
  }
}