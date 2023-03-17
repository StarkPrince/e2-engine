import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StyleProvider } from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default () =>
{
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route path="/" component={Landing} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};