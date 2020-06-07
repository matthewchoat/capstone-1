import React from 'react';
import PackItem from './PackItem';

export default function PackList({ pack }) {
  return (
    <div className="container-fluid">
      {pack.map(item => (
        <PackItem key={item.id} item={item} />
      ))}
    </div>
  );
}
