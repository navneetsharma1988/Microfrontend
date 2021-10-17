import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Header from './components/header/Header';
import MarketingApp from "./components/MarketingApp";

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

export default () => {
    return (
    <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
            <div>
                <Header />
                <MarketingApp />
            </div>
        </StylesProvider>
    </BrowserRouter>
    )

};