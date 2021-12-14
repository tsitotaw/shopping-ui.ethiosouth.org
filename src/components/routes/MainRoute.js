import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { useNavigate } from "react-router-dom";
import CartPage from "../cart-page/Cart-page";
import Home from "../home/Home";
import SignInAndSignUpPage from "../sign-in-and-sign-up/sign-in-and-sign-up.component";
import SignIn from "../sign-in/sign-in.component";
import axiosApiHelper from "../../api/axiosApiHelper";

const MainRoute = (props) => {
    const { cartItems, total, 
        onAdd, onRemove, onClearCartItem, onDeleteItem } = props;
    const navigate = useNavigate();
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [items, setItems] = useState([]);


    const userLoggedInHandler = data => {
        setLoggedIn(data);
        if (data) {
            navigate("/", { replace: true });
        }

    };

    useEffect(() => {
        axiosApiHelper.findAll("products").then(result => {
            console.log(result);
            setItems(result.data);
        }
        ).catch(err =>{
            console.log(err);
        })
    }, [])


    return (
        <>
            {!isLoggedIn && <SignIn onLoggingIn={userLoggedInHandler} />}
            {isLoggedIn &&
                <Routes>
                    <Route path="/" element={<Home onAdd={props.onAdd} items={items} onDeleteItem={onDeleteItem} />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/cart" element={<CartPage cartItems={cartItems}
                        total={total}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        onClearCartItem={onClearCartItem} />} />
                </Routes>
            }
        </>
    );
};

export default MainRoute;