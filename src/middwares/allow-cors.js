module.exports = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    res.header("Access-Control-Allow-Headers", "X-Requested-With, X-Tenant-ID, Origin, Content-Type, Accept")
    res.header("Access-Control-Allow-Credentials", true)

    // allow cross domain request
    if (req.method == 'OPTIONS') {
        return res.status(200).end()
    }

    return next()
}
