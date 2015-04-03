"use strict";

module.exports = function(sequelize, DataTypes) {
  var Station = sequelize.define("Station", {
    id : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true, unique : true},
    station: DataTypes.STRING,
    code: DataTypes.STRING,
    pinyin: DataTypes.STRING,
    alias: DataTypes.STRING
  },{
    timestamps: false
  });

  return Station;
};
