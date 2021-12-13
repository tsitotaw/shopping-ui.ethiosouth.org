import React from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';
import SHOP_DATA from '../../shop.data';


import './collections-overview.styles.scss';

const CollectionsOverview = ({onAdd, cartItems}) => (
  <div className='collections-overview'>
    {SHOP_DATA.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} onAdd={onAdd} />
    ))}
  </div>
);

export default CollectionsOverview;
