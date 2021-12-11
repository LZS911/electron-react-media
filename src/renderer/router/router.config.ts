import React from 'react';
import { IMenuDataItem } from './index.d';

const routers: IMenuDataItem[] = [
  {
    path: '/recommendation',
    name: 'recommendation',
    component: React.lazy(
      () => import('../pages/DiscoverMusic/components/Recommendation')
    ),
  },
  {
    path: '/songList',
    name: 'songList',
    component: React.lazy(
      () => import('../pages/DiscoverMusic/components/SongList')
    ),
  },
  {
    path: '/privateFM',
    name: 'privateFM',
    component: React.lazy(() => import('../pages/PrivateFM')),
  },
];

export default routers;
