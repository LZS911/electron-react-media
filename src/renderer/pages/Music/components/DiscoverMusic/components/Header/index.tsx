import React from 'react';
import { TabsComponent } from '../../../../../../components';
import { ITabsList } from '../../../../../../components/Tabs/index.d';
import { MusicHeaderWrapper } from './style';

const list: ITabsList[] = [
  { path: '/music/discoverMusic/recommendation', label: '个性推荐' },
  { path: '/music/discoverMusic/songList', label: '歌单' },
];

const MusicHeader: React.FC = () => {
  return (
    <MusicHeaderWrapper>
      <TabsComponent list={list} />
    </MusicHeaderWrapper>
  );
};

export default MusicHeader;
