import { INavList } from '../../../../common/type';

export const navList: INavList[] = [
  {
    menu: '/discoverMusic',
    subMenu: [
      { path: '/recommendation', label: '个性推荐' },
      { path: '/songList', label: '歌单' },
      { path: '/anchorStation', label: '主播电台' },
      { path: '/leaderBoard', label: '排行榜' },
      { path: '/singer', label: '歌手' },
      { path: '/latestMusic', label: '最新音乐' },
    ],
  },
  {
    menu: '/privateFM',
    subMenu: [],
  },
];
