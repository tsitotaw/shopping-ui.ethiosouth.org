import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { useNavigate } from "react-router-dom";
import Home from "../home/Home";

const MainRoute = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={ <Home />} />
            </Routes>
        </>
    );
};

export default MainRoute;