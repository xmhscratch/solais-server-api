module.exports = function(error, req, res, next) {
    if (config('system.development', false)) {
        console.error(error)
    }
    return res.status(404).end()
}
