![](https://github.com/henriquels25/redux-oidc-sample/workflows/Test/badge.svg)

# redux-oidc-sample
Sample app demonstrating how to use the library [redux-oidc](https://github.com/maxmantz/redux-oidc) using the grant type `Authorization Code with PKCE` with [react-router](https://github.com/ReactTraining/react-router).

# How to run
* Clone this repository. You will need node and npm installed globally on your machine.

    `$ git clone https://github.com/henriquels25/redux-oidc-sample`

* Install the dependencies

    `$ cd redux-oidc-sample`

    `$ npm install`

## Execution profiles

This project contains two execution scripts:

* **Local**: Sets up a [mock authorization server](https://github.com/axa-group/oauth2-mock-server), changes the environment to point to it and starts the project.

    `$ npm run local`

* **Okta**: Changes the environment to point to the Okta authorization server and starts the project.

    `$ npm run okta`

## Live application
You can access a live version of this application integrated with the Okta authorization server in this [link](https://redux-oidc-sample.netlify.com/home).

## Okta Authorization Server
I setup a free authorization server in [Okta](https://www.okta.com/), setting up the server to just accept the authorization code flow and requests from the following clients:
    
* http://localhost:3000/
* https://redux-oidc-sample.netlify.com/

## Mock Authorization Server
This project uses [oauth2-mock-server](https://github.com/axa-group/oauth2-mock-server) as a mock authorization server in order to have a working
local profile.    
