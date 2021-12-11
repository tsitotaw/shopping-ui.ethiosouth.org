import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({item}) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        
      </div>
    </div>
  );
};

export default CollectionItem;