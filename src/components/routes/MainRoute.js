import { useEffect, useState } from "react";
import { Route, Routes  } from "react-router";
import { useNavigate } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon.component";
import CartPage from "../cart-page/Cart-page";
import Home from "../home/Home";
import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";

const MainRoute = (props) => {
<<<<<<< HEAD
=======
    const { cartItems, total, onAdd, onRemove, onClearCartItem} = props;
>>>>>>> f5e7f738fea4fe58f0c693225ca41d4abd6ef714
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
<<<<<<< HEAD
            <Routes>
                
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn onLoggingIn={userLoggedInHandler}/>} />
                {isLoggedIn && <Route path="/" element={ <Home />} /> }
                
            </Routes>
=======
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
>>>>>>> f5e7f738fea4fe58f0c693225ca41d4abd6ef714
        </>
    );
};

export default MainRoute;