const Sequelize = require('sequelize');
const sequelize = require('../config/sqlConfig');

const Course = sequelize.define('course',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});
module.exports=Course;
