module.exports = function(connection, DataTypes) {
    const Client = connection.define('Client', {
        id: {
            type: DataTypes.STRING(36),
            allowNull: false,
        },
        secret: {
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
        indexes: [{
            primaryKey: true,
            fields: ['id', 'secret']
        }]
    })

    Client.sync()
    return Client
}
