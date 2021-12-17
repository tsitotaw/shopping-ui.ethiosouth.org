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
import axiosApiHelper from "../../api/axiosApiHelper";
import SignUp from "../sign-up/SignUp.component";
import FollowSeller from "../approval/FollowSeller";

const MainRoute = (props) => {
    const { cartItems, total, 
        onAdd, onRemove, onClearCartItem, onDeleteItem } = props;
    const navigate = useNavigate();
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [items, setItems] = useState([]);


    const userLoggedInHandler = data => {
        setLoggedIn(data);
        if (data) {
            window.location.href = '/';
        }

    };

    useEffect(() => {
        axiosApiHelper.findAll("products", true).then(result => {
            console.log(result);
            setItems(result.data);
        }
        ).catch(err =>{
            console.log(err);
        })
    }, [])

    return (
        <>
                <Routes>
                    <Route path="/" element={<Home onAdd={props.onAdd} items={items} onDeleteItem={onDeleteItem} />} />
                    {/* <Route path="/signin" element={<SignIn />} /> */}
                    <Route path="/" element={<Home onAdd={props.onAdd} />} />
                    <Route path="/product/create" element={<ProductAdd />} />
                    <Route path="/approve/seller" element={<ApproveSeller />} />
                    <Route path="/approve/review" element={<ApproveReview />} />
                    <Route path="/follow" element={<FollowSeller />} />
                    <Route path="/signin" element={<SignIn onLoggingIn={userLoggedInHandler}/>} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/cart" element={<CartPage cartItems={cartItems}
                        total={total}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        onClearCartItem={onClearCartItem} />} />
                </Routes>
        </>
    );
};

export default MainRoute;