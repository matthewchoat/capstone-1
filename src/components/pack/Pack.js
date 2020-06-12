//main display for the pack (cart)
import React from 'react';
import Title from '../common/Title';
import PackColumns from './PackColumns';
import EmptyPack from './EmptyPack';
import PackList from './PackList';
import PackTotal from './PackTotal';
import { usePackState } from '../../global-state';
import styled from 'styled-components'

export default function Pack() {
  const { packState, packActions } = usePackState();
  const { pack } = packState;
  let content;
  content =
  //as long as the pack contains items, display it
    pack.length > 0 ? (
      <>
        <Title title="Your pack" />
        <YourPack>
        <img src='img/longboardpack.png'
          alt='YourPack'
          style={{ width: '7rem', height: '5rem'}}
          />
        </YourPack>
        <PackColumns />
        <PackList pack={pack} />
        <PackTotal packState={packState} packActions={packActions} history={pack.history} />
      </>
    ) : (
    //otherwise, run the EmptyPack display
      <EmptyPack />
    );
  return content;
}

const YourPack = styled.div`
  top: 10;
  left: 0;
  right: 0;
  bottom: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`;