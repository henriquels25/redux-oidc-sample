import React from 'react';
import userManager from "../userManager";

const onLoginButtonClick = (event) => {
    event.preventDefault();
    userManager.signinRedirect();
};

const LoginPage = () => {
    return (
         <button onClick={onLoginButtonClick}>Login</button>
    );
};

export default LoginPage;