import React from 'react';
import { useSelector } from "react-redux";
import userManager from "../../auth/userManager";

const onLogoutButtonClick = (event) => {
    event.preventDefault();
    userManager.signoutRedirect();
};

const Admin = (props) => {
    const stateAuth = useSelector(state => state.auth);
    const user = stateAuth.user;

    return (
        <div>
            <h2>
                Admin Dashboard
            </h2>
            <h1>
                Sub: {user.profile.sub}
            </h1>
            <button onClick={onLogoutButtonClick}>Logout</button>
        </div>
    );
}

export default Admin;