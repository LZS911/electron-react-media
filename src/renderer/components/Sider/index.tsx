import React from 'react';
import { Link } from 'react-router-dom';

const list = [
  {
    label: '发现音乐',
    path: '/discoverMusic',
  },
  {
    label: '私人FM',
    path: '/privateFM',
  },
];

const MusicSider: React.FC = () => {
  return (
    <>
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
