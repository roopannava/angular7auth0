interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'AvGJ0wSoBmOODmx_gNeE9VAKJZ0hjMlz',
  domain: 'knowledge-it.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
