import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ items, onAdd, onDeleteItem }) => (
  <div className='collection-preview'>
    <div className='preview'>
      {
        [].concat.apply([], items)
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id}
              item={item}
              onAdd={onAdd}
              onDeleteItem={onDeleteItem} />
          ))}
    </div>
  </div>
);

export default CollectionPreview;
