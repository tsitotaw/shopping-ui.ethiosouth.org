import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './App.scss'
import { useState } from 'react';
import Header from './components/header/Header';
import MainRoute from './components/routes/MainRoute';
import axiosApiHelper from './api/axiosApiHelper';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const remove = cartItems.find((x) => x.id === product.id);
    if (remove) {
      if (remove.qty > 1) {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...remove, qty: remove.qty - 1 } : x
          )
        );
      }
      else {
        setCartItems(
          cartItems.filter((x) =>
            x.id !== product.id
          )
        );
      }
    }
  }

  const onClearCartItem = (product) => {
    const remove = cartItems.find((x) => x.id === product.id);
    if (remove) {
      setCartItems(
        cartItems.filter((x) =>
          x.id !== product.id
        ));
    }
  }

  const onClearCart = () => {
    if (cartItems.length)
      setCartItems([]);
  }

  const onDeleteItem = (item) => {
    console.log(item)
    axiosApiHelper.remove("products", item.id).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  const loggedInUserHandler = (data) => {
    setLoggedIn(true)
  }


  let total = 0;
  if (cartItems.length > 0) {
    cartItems.map(item => total += item.price * item.qty)
  }
  let itemCount = 0;
  if (cartItems) {
    cartItems.map(item => itemCount += item.qty)
  }
  return (
    <>
      <Header onAdd={onAdd} cartItems={itemCount} />
      <div className="content__container">
        <MainRoute onAdd={onAdd}
          cartItems={cartItems}
          total={total}
          onAdd={onAdd}

          onRemove={onRemove}
          onClearCartItem={onClearCartItem}
          onDeleteItem={onDeleteItem}
          onRemove={onRemove}
          onClearCartItem={onClearCartItem}
          onClearCart={onClearCart}
          onLoggedIn={loggedInUserHandler} />
      </div>

    </>
  );
}

export default App;
