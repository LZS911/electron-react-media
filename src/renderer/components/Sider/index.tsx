import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { hederNavActions } from '../../store/action/headerNav';

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
  const dispatch = useDispatch();
  const changeCurrentMenu = (path: string) => {
    dispatch(hederNavActions.setCurrentMenu(path.replace('/', '')));
  };
  return (
    <>
      {list.map((v) => {
        return (
          <Link
            key={v.path}
            to={v.path}
            onClick={() => changeCurrentMenu(v.path)}
          >
            {v.label}
          </Link>
        );
      })}
    </>
  );
};
export default MusicSider;
