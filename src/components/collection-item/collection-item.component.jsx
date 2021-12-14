import React, { useContext } from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item, onAdd, cartItems, onDeleteItem }) => {
  const { name, price, img } = item;

  return (
    <div className='collection-item'>
      
        <div
          className='image colum'
          style={{
            backgroundImage: `url(${img})`
          }}
        />
      
      <div className='collection-footer'>
        <span className='name'>{name}</span>

      </div>
      <CustomButton
        className='custom-button'
        onClick={() => onAdd(item)} cartItems={cartItems}
        inverted
      >
        Add to cart
      </CustomButton>
      {/* <CustomButton
        onClick={() => onDeleteItem(item)}
        inverted
      >
        Delete item
      </CustomButton> */}
    </div>
  );
};

export default CollectionItem;