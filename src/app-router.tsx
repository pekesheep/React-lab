import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Details } from "./details";
import { InputOrg } from "./input-org";

export const AppRouter = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<InputOrg />} />
                <Route path="/details/:login" element={<Details />} />
            </Routes>
        </BrowserRouter>
    );
}