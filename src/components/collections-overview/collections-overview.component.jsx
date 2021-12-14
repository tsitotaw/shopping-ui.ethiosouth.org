import React from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';


import './collections-overview.styles.scss';

const CollectionsOverview = ({ onAdd, items, onDeleteItem }) => {
  return (
    <div className='collections-overview'>
      {
        items.map((item) => (
          <CollectionPreview key={item.id}
            items={[item]} onAdd={onAdd}
            onDeleteItem={onDeleteItem} />
        ))
      }
    </div>
  )
};

export default CollectionsOverview;
