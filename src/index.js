const allowCorsMiddware = require('./middwares/allow-cors')
const handleErrorMiddware = require('./middwares/handle-error')

class Server extends System.Module {

    static get $ID() {
        return 'API'
    }

    static get Protection() {
        return require('./protection')
    }

    constructor() {
        super()
    }

    initialize(done) {
        this.setup()
        return done()
    }

    setup() {
        // $appl.use(function(req, res, next) {
        //     config('dispatcher.onHttpRequest', _.noop)(req)
        //     return next()
        // })
        // $appl.use(allowCorsMiddware)
        // // $appl.use(oauth)
        // $appl.use(function(error, req, res, next) {
        //     config('dispatcher.onHttpError', _.noop)(req)
        //     return next(error)
        // })
        // $appl.use(handleErrorMiddware)
    }
}

module.exports = Server
