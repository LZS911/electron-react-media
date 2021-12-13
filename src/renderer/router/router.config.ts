import React from 'react';
import { IMenuDataItem } from './index.type';

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
    path: '/leaderBoard',
    name: 'leaderBoard',
    component: React.lazy(
      () => import('../pages/DiscoverMusic/components/LeaderBoard')
    ),
  },
  {
    path: '/singer',
    name: 'singer',
    component: React.lazy(
      () => import('../pages/DiscoverMusic/components/Singer')
    ),
  },
  {
    path: '/anchorStation',
    name: 'anchorStation',
    component: React.lazy(
      () => import('../pages/DiscoverMusic/components/AnchorStation')
    ),
  },
  {
    path: '/latestMusic',
    name: 'latestMusic',
    component: React.lazy(
      () => import('../pages/DiscoverMusic/components/LatestMusic')
    ),
  },
  {
    path: '/privateFM',
    name: 'privateFM',
    component: React.lazy(() => import('../pages/PrivateFM')),
  },
];

export default routers;
