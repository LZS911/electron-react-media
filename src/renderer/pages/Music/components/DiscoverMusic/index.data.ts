import React from 'react';
import { IMenuDataItem } from '../../../../router/index.d';

export const routers: IMenuDataItem[] = [
  {
    path: '/music/discoverMusic/recommendation',
    name: 'recommendation',
    component: React.lazy(() => import('./components/Recommendation')),
  },
  {
    path: '/music/discoverMusic/songList',
    name: 'songList',
    component: React.lazy(() => import('./components/SongList')),
  },
];
