module.exports = function(connection, DataTypes) {
    const Token = connection.define('Token', {
        id: {
            primaryKey: true,
            type: DataTypes.STRING(36),
            allowNull: false,
        }
        access_token: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        access_token_expires_on: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        client_id: {
            type: DataTypes.STRING(36),
            allowNull: false,
        },
        refresh_token: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        refresh_token_expires_on: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.STRING(36),
            allowNull: false,
        },
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'tokens',
    })

    Token.sync()
    return Token
}
