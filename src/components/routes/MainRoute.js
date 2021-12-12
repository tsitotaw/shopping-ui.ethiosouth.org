import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { useNavigate } from "react-router-dom";
import Home from "../home/Home";
import SignInAndSignUpPage from "../sign-in-and-sign-up/sign-in-and-sign-up.component";
import SignIn from "../sign-in/sign-in.component";

const MainRoute = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </>
    );
};

export default MainRoute;