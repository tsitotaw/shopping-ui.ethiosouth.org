import { useEffect, useState } from "react";
import { Route, Routes  } from "react-router";
import { useNavigate } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon.component";
import CartPage from "../cart-page/Cart-page";
import Home from "../home/Home";
import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/SignUp.component";

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
            {/* <Routes>
                
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn onLoggingIn={userLoggedInHandler}/>} />
                {isLoggedIn && <Route path="/" element={ <Home />} /> }
                
            </Routes> */}
                <Routes>
                    {isLoggedIn && <Route path="/" element={<Home onAdd={props.onAdd} />} /> }
                    <Route path="/signin" element={<SignIn onLoggingIn={userLoggedInHandler}/>} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/cart" element={<CartPage cartItems={cartItems}
                        total={total}
                        onAdd={onAdd} 
                        onRemove={onRemove}
                        onClearCartItem={onClearCartItem}/>} />
                </Routes>
        </>
    );
};

export default MainRoute;