/*

ALTER TABLE oauth_tokens
    ADD CONSTRAINT oauth_tokens_pkey PRIMARY KEY (id);

ALTER TABLE oauth_clients
    ADD CONSTRAINT oauth_clients_pkey PRIMARY KEY (client_id, client_secret);

ALTER TABLE users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);

 */

class Model {

    constructor() {
        this.connection = connection
        return this
    }

    /*
     * Get access token.
     */
    getAccessToken(bearerToken) {
        return Promise.using(
            this.getDb(),
            (db) => db.Token.findOne({
                access_token: bearerToken
            })
        ).then((tokenModel) => {
            var token = result.rows[0]
            return {
                accessToken: tokenModel.get('access_token'),
                client: { id: tokenModel.get('client_id') },
                expires: tokenModel.get('access_token_expires_on'),
                user: { id: token.get('user_id') },
            }
        })
    }

    /**
     * Get client.
     */
    getClient(clientId, clientSecret) {
        // return pg.query('SELECT client_id, client_secret, redirect_uri FROM oauth_clients WHERE client_id = $1 AND client_secret = $2', [clientId, clientSecret])
        //     .then(function(result) {
        //         var oAuthClient = result.rows[0]

        //         if (!oAuthClient) {
        //             return
        //         }

        //         return {
        //             clientId: oAuthClient.client_id,
        //             clientSecret: oAuthClient.client_secret,
        //             grants: ['password'], // the list of OAuth2 grant types that should be allowed
        //         }
        //     })
    }

    /**
     * Get refresh token.
     */
    getRefreshToken(bearerToken) {
        // return pg.query('SELECT access_token, access_token_expires_on, client_id, refresh_token, refresh_token_expires_on, user_id FROM oauth_tokens WHERE refresh_token = $1', [bearerToken])
        //     .then(function(result) {
        //         return result.rowCount ? result.rows[0] : false
        //     })
    }

    /*
     * Get user.
     */
    getUser(username, password) {
    //     return pg.query('SELECT id FROM users WHERE username = $1 AND password = $2', [username, password])
    //         .then(function(result) {
    //             return result.rowCount ? result.rows[0] : false
    //         })
    }

    /**
     * Save token.
     */
    saveAccessToken(token, client, user) {
        // return pg.query('INSERT INTO oauth_tokens(access_token, access_token_expires_on, client_id, refresh_token, refresh_token_expires_on, user_id) VALUES ($1, $2, $3, $4)', [
        //     token.accessToken,
        //     token.accessTokenExpiresOn,
        //     client.id,
        //     token.refreshToken,
        //     token.refreshTokenExpiresOn,
        //     user.id
        // ]).then(function(result) {
        //     return result.rowCount ? result.rows[0] : false; // TODO return object with client: {id: clientId} and user: {id: userId} defined
        // })
    }
}

module.exports = Model
