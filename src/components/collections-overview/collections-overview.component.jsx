import React, { useState } from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';
import SHOP_DATA from '../../shop.data';
import axiosApiHelper from '../../api/axiosApiHelper';


import './collections-overview.styles.scss';

const CollectionsOverview = ({ onAdd, cartItems }) => (

  <div className='collections-overview'>
    {
      //const res = await axiosApiHelper.findAll("products");
      //const productData = res.data;
      //console.log(productData)
      axiosApiHelper.findAll("products")
      .then(data => {
        data.data
        .map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} onAdd={onAdd} />
        ));
      })
    }
  </div>

);

export default CollectionsOverview;
