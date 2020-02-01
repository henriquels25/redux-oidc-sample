![](https://github.com/henriquels25/redux-oidc-sample/workflows/Test/badge.svg)

# redux-oidc-sample
Sample app demonstrating how to use the library [redux-oidc](https://github.com/maxmantz/redux-oidc) using the grant type `Authorization Code with PKCE`.

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

* **Okta**: Changes the environment to point to an Okta authorization server and starts the project.

    `$ npm run okta`

## Mock Authorization Server
This project uses [oauth2-mock-server](https://github.com/axa-group/oauth2-mock-server) as a mock authorization server in order to have a working
local profile.    
