const { db, DataTypes, Model } = requre("./db/connection.js");

class User extends Model {};

User.init({ 
    username: DataTypes.STRING,
    email: DataTypes.STRING
},{
    sequelize: db,
    modelName: "User"
});

module.exports = User;