import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { TabsComponent } from '../../..';
import { IReduxState } from '../../../../store/index.d';

const list = [
  {
    menu: '/discoverMusic',
    subMenu: [
      { path: '/recommendation', label: '个性推荐' },
      { path: '/songList', label: '歌单' },
    ],
  },
  {
    menu: '/privateFM',
    subMenu: [],
  },
];
const Nav: React.FC = () => {
  const { currentMenu } = useSelector((state: IReduxState) => {
    return {
      currentMenu: state.headerNav.get('currentMenu'),
    };
  });
  const { pathname } = useLocation();
  const getNavList = () => {
    const menu = list.find((v) => v.menu === pathname);
    if (menu) {
      return menu.subMenu;
    }
    const subMenu = list.find((v) =>
      v.subMenu.some((m) => m.path === pathname)
    )?.subMenu;
    if (subMenu) {
      return subMenu;
    }
    return [];
  };
  return (
    <div className="nav">
      <TabsComponent list={getNavList()} />
    </div>
  );
};
export default Nav;
