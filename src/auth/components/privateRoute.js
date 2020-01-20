import React from 'react';
import { useSelector } from "react-redux";
import {
    Route,
    Redirect
  } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
    const stateAuth = useSelector(state => state.auth);
    const user = stateAuth.user;


    if (stateAuth.isLoadingUser) {
        return (
            <div>Loading...</div>
        );
    }

    return (
      <Route
        {...rest}
        render={({ location }) =>
           user  ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  };

  export default PrivateRoute;