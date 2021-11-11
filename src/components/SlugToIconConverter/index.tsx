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
    break;
    case 'audio': 
      return <BsMusicNoteBeamed color='var(--chakra-colors-yellow)'/>
    break;
    case 'video': 
      return <BsCameraVideoFill color='var(--chakra-colors-green)'/>
    break;
    case 'document': 
      return <FaFile color='var(--chakra-colors-blue)' />
    break;
    case 'folder': 
      return <FaFolder color='var(--chakra-colors-orange)'/>
    break;
    default: 
      return <AiFillFileUnknown color='var(--chakra-colors-puple)'/>
    break;
  }
}