import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderComponent } from '../../../../components';

const list = [
  {
    label: '发现音乐',
    path: '/music/discoverMusic',
  },
  {
    label: '私人FM',
    path: '/music/privateFM',
  },
];

const MusicSider: React.FC = () => {
  return (
    <>
      <HeaderComponent />
      {list.map((v) => {
        return (
          <Link key={v.path} to={v.path}>
            {v.label}
          </Link>
        );
      })}
    </>
  );
};
export default MusicSider;
