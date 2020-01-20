import { createUserManager } from 'redux-oidc';

const userManagerConfig = {
  client_id: 'client_id_sample',
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/callback`,
  post_logout_redirect_uri:  `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/home`,
  response_type: 'code',
  scope: 'openid',
  authority: 'http://localhost:3001/',
  grantType: "authorization_code",
  silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/silent_renew.html`,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  revokeAccessTokenOnSignout: true,
  loadUserInfo: true
};

const userManager = createUserManager(userManagerConfig);

export default userManager;
