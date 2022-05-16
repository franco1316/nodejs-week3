const { User } = require("./users");
const { Repair } = require("./repairs");

const intiModels = () => {
  User.hasMany(Repair, { foreignKey: "userId" });
  Repair.belongsTo(User, { foreignKey: "id" });
};

module.exports = { intiModels };
