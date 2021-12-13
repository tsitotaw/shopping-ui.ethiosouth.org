import { useEffect, useState } from "react";
import { Route, Routes  } from "react-router";
import { useNavigate } from "react-router-dom";
import Home from "../home/Home";
import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";

const MainRoute = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setLoggedIn] = useState(false);
    

    const userLoggedInHandler = data => {
        setLoggedIn(data);
        if(data){
            navigate("/", { replace: true });
        }
        
    };
    return (
        <>
            <Routes>
                
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn onLoggingIn={userLoggedInHandler}/>} />
                {isLoggedIn && <Route path="/" element={ <Home />} /> }
                
            </Routes>
        </>
    );
};

export default MainRoute;