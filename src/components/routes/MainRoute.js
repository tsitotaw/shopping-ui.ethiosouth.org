import { useEffect, useState } from "react";
import { Route, Routes  } from "react-router";
import { useNavigate } from "react-router-dom";
import ApproveReview from "../approval/ApproveReview";
import ApproveSeller from "../approval/ApproveSeller";
import CartIcon from "../cart-icon/cart-icon.component";
import CartPage from "../cart-page/Cart-page";
import Home from "../home/Home";
import ProductAdd from "../product/ProductAdd";
import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/SignUp.component";

const MainRoute = (props) => {
    const { cartItems, total, onAdd, onRemove, onClearCartItem} = props;
    const navigate = useNavigate();
    const [isLoggedIn, setLoggedIn] = useState(false);


    const userLoggedInHandler = data => {
        setLoggedIn(data);
        if (data) {
            // i want this to broadcast event
            //navigate("/", { replace: true });
            window.location.href = '/';
        }

    };
    
    return (
        <>
                <Routes>
                    <Route path="/" element={<Home onAdd={props.onAdd} />} />
                    <Route path="/product/create" element={<ProductAdd />} />
                    <Route path="/approve/seller" element={<ApproveSeller />} />
                    <Route path="/approve/review" element={<ApproveReview />} />
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