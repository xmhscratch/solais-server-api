const OAuthServer = require('express-oauth-server')

module.exports = function(options = {}) {
    const oauth = new OAuthServer(options)
    return oauth.authorize()
}

/*

CREATE TABLE oauth_tokens (
    id varchar(36) NOT NULL,
    access_token text NOT NULL,
    access_token_expires_on timestamp NOT NULL,
    client_id varchar(36) NOT NULL,
    refresh_token text NOT NULL,
    refresh_token_expires_on timestamp NOT NULL,
    user_id varchar(36) NOT NULL
);

CREATE TABLE oauth_clients (
    client_id varchar(36) NOT NULL,
    client_secret varchar(36) NOT NULL,
    redirect_uri text NOT NULL
);

CREATE TABLE permission (
    id varchar(36) NOT NULL,
    username text NOT NULL,
    password text NOT NULL
);

ALTER TABLE oauth_tokens
    ADD CONSTRAINT oauth_tokens_pkey PRIMARY KEY (id);

ALTER TABLE oauth_clients
    ADD CONSTRAINT oauth_clients_pkey PRIMARY KEY (client_id, client_secret);

ALTER TABLE users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);

 */