"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";
var config    = require(__dirname + '/../application/config/mysql.js')[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);


global.mysqldb = sequelize;
global.Sequelize = Sequelize;


module.exports = mysqldb;



/*
*
* ���� sequelize.import ���� model��ֱ��ʹ��sleek��getModel���뺯��
* �Աȣ�sleek��getModel��ʽû�л��������Ҫ����������������
* ԭ�е�mongodb������Ҳû�л������
*
*
* ��Ҫ�̻�mysql��mongodb����������
*
* */