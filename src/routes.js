import React from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Admin from './components/admin/admin';
import Home from './components/home/home';
import SilentRenewComponent from './auth/components/silent_renew';
import CallbackPage from './auth/components/callback';
import PrivateRoute from './auth/components/privateRoute';
import LoginPage from "./auth/components/login";

const routes = () => {
    return (
        <Router>
            <Route exact path="/"><Home/></Route>
            <Route path="/home"><Home/></Route>
            <Route path="/login"><LoginPage/></Route>
            <Route path="/callback" component={CallbackPage} />
            <PrivateRoute path="/admin"> <Admin /></PrivateRoute>
            <Route path="/silent_renew.html"><SilentRenewComponent /></Route>
        </Router>
    );
}

export default routes;