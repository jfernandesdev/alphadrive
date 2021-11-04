import { HiOutlineViewGrid, HiOutlineShare, HiOutlineStar, HiOutlineTrash } from '../styles/Icons';

export const menuItems = [
  {
    title: 'Dashboard',
    icon: HiOutlineViewGrid,
    url: '/dashboard'
  },
  {
    title: 'Shared',
    icon: HiOutlineShare,
    url: '/shared'
  },
  {
    title: 'Starred',
    icon: HiOutlineStar,
    url: '/starred'
  },
  {
    title: 'Deleted',
    icon: HiOutlineTrash,
    url: '/deleted'
  }
];