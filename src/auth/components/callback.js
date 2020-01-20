import React from "react";
import { CallbackComponent } from "redux-oidc";
import userManager from "../userManager";
import { useHistory } from "react-router-dom";

const CallbackPage = () => {
  const history = useHistory();

  return (
    <CallbackComponent
      userManager={userManager}
      successCallback={() => {
        console.log("Success");
        history.push("/admin");
      }}
      errorCallback={error => {
        history.push("/admin");
        console.error(error);
      }}
    >
      <div>Redirecting...</div>
    </CallbackComponent>
  );
};

export default CallbackPage;