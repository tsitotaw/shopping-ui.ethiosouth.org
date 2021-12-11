import React from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';
import SHOP_DATA from '../../shop.data';


import './collections-overview.styles.scss';

const CollectionsOverview = () => (
  <div className='collections-overview'>
    {SHOP_DATA.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

export default CollectionsOverview;
