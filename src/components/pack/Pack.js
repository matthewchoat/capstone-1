import React from 'react';
import Title from '../common/Title';
import PackColumns from './PackColumns';
import EmptyPack from './EmptyPack';
import PackList from './PackList';
import PackTotal from './PackTotal';
import { usePackState } from '../../global-state';

export default function Pack() {
  const { packState, packActions } = usePackState();
  const { pack } = packState;
  let content;
  content =
    pack.length > 0 ? (
      <>
        <Title title="Your pack" />
        <PackColumns />
        <PackList pack={pack} />
        <PackTotal packState={packState} packActions={packActions} history={pack.history} />
      </>
    ) : (
      <EmptyPack />
    );
  return content;
}
