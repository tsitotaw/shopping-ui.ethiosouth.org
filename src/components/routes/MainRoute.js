import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { useNavigate } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon.component";
import CartPage from "../cart-page/Cart-page";
import Home from "../home/Home";
import SignInAndSignUpPage from "../sign-in-and-sign-up/sign-in-and-sign-up.component";
import SignIn from "../sign-in/sign-in.component";

const MainRoute = (props) => {
    const { cartItems, total, onAdd, onRemove, onClearCartItem} = props;
    const navigate = useNavigate();
    const [isLoggedIn, setLoggedIn] = useState(false);


    const userLoggedInHandler = data => {
        setLoggedIn(data);
        if (data) {
            navigate("/", { replace: true });
        }

    };

    return (
        <>
            {!isLoggedIn && <SignIn onLoggingIn={userLoggedInHandler} />}
            {isLoggedIn &&
                <Routes>
                    <Route path="/" element={<Home onAdd={props.onAdd} />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/cart" element={<CartPage cartItems={cartItems}
                        total={total}
                        onAdd={onAdd} 
                        onRemove={onRemove}
                        onClearCartItem={onClearCartItem}/>} />
                </Routes>
            }
        </>
    );
};

export default MainRoute;