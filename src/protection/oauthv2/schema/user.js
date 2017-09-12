module.exports = function(connection, DataTypes) {
    const User = connection.define('User', {
        id: {
            primaryKey: true,
            type: DataTypes.STRING(36),
            allowNull: false,
        }
        username: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'users',
    })

    User.sync()
    return User
}
