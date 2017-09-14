class Model {

    constructor(dbname, username, password, options) {
        this.dbname = dbname
        this.username = username
        this.password = password
        this.options = options

        return this
    }

    getDb() {
        const {
            dbname, username, password, options
        } = this

        return System.Orm.Db
            .connect(dbname, username, password, options)
            .load(node.path.join(__dirname, 'schema'))
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
            return {
                accessToken: tokenModel.get('access_token'),
                client: { id: tokenModel.get('client_id') },
                expires: tokenModel.get('access_token_expires_on'),
                user: { id: tokenModel.get('user_id') },
            }
        })
    }

    /**
     * Get client.
     */
    getClient(clientId, clientSecret) {
        return Promise.using(
            this.getDb(),
            (db) => db.Client.findOne({
                id: clientId,
                secret: clientSecret
            })
        ).then((clientModel) => {
            if (!clientModel) return

            return {
                clientId: clientModel.get('id'),
                clientSecret: clientModel.get('secret'),
                grants: ['basic', 'password'],
            }
        })
    }

    /**
     * Get refresh token.
     */
    getRefreshToken(bearerToken) {
        return Promise.using(
            this.getDb(),
            (db) => db.Token.findOne({
                refresh_token: bearerToken
            })
        ).then((tokenModel) => {
            return tokenModel ? tokenModel.get({ plain: true }) : false
        })
    }

    /*
     * Get user.
     */
    getUser(username, password) {
        return Promise.using(
            this.getDb(),
            (db) => db.User.findOne({
                username: username,
                password: password
            })
        ).then((userModel) => {
            return userModel ? userModel.get({ plain: true }) : false
        })
    }

    /**
     * Save token.
     */
    saveAccessToken(token, client, user) {
        return Promise.using(
            this.getDb(),
            (db) => db.Token.findOrCreate({
                where: {
                    access_token: token.accessToken,
                    client_id: client.id,
                    user_id: user.id
                },
                defaults: {
                    // access_token: token.accessToken,
                    // access_token_expires_on: token.accessTokenExpiresOn,
                    // client_id: client.id,
                    // refresh_token: token.refreshToken,
                    // refresh_token_expires_on: token.refreshTokenExpiresOn,
                    // user_id: user.id
                }
            })
        ).then((tokenModel, isCreated) => {
            return tokenModel ? tokenModel.get({ plain: true }) : false

            // TODO return object with client: {id: clientId} and user: {id: userId} defined
            // return result.rowCount ? result.rows[0] : false;
        })
    }
}

module.exports = Model
