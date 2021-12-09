import React from 'react';
import { IMenuDataItem } from './index.d';

const routers: IMenuDataItem[] = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: React.lazy(() => import('../pages/Home')),
  },
  {
    path: '/video',
    name: 'video',
    component: React.lazy(() => import('../pages/Video')),
  },
  {
    path: '/music',
    name: 'music',
    component: React.lazy(() => import('../pages/Music')),
  },
];

export default routers;
