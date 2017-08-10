
module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define("burgers", {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });
  //syncs with db
  burgers.sync();

  return burgers;
};

// module.exports = function(sequelize, DataTypes) {
//   var burgers = sequelize.define("burgers", {
//     burger_name: {
//       type: DataTypes.STRING
//     },
//     devoured: {
//       type: DataTypes.BOOLEAN
//     }  }, {
//     timestamps: false
//   });
//   //syncs with db
//   burgers.sync();

//   return burgers;
// };