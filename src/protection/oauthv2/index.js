const OAuthServer = require('express-oauth-server')
const Model = require('./model')

var defaultModel

module.exports = function() {
    if (!defaultModel) {
        const {
            dbname, username, password, options
        } = config('api.oauth.database', {
            dbname: 'oauthv2',
            username: 'root',
            password: '',
            options: {}
        })

        defaultModel = new Model(
            dbname, username, password, options
        )
    }

    const oauth = new OAuthServer({
        model: defaultModel
    })

    return oauth.authorize()
}
