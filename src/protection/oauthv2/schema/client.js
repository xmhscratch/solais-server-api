module.exports = function(connection, DataTypes) {
    const Client = connection.define('Client', {
        id: {
            primaryKey: true,
            type: DataTypes.STRING(36),
            allowNull: false,
        }
        client_id: {
            type: DataTypes.STRING(36),
            allowNull: false,
        },
        client_secret: {
            type: DataTypes.STRING(36),
            allowNull: false,
        },
        redirect_uri: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'clients',
    })

    Client.sync()
    return Client
}
