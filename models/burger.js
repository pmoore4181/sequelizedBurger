// Add code here to create a Post model
// This model needs a title, a body, and a category
// Don't forget to 'return' the post after defining
module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define("burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 160],
                }
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    return burger;
};