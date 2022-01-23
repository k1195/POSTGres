const express = require('express')
const Conn = require('../seq')
const Sequelize = require('sequelize')

const User = Conn.define('users', {
    // attributes
        firstName: {
    type: Sequelize.STRING,
    allowNull: false
    },
    lastName: {
    type: Sequelize.STRING
    // allowNull defaults to true
    },
    uId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncreement:true
    }
    }, {
    // options
    });

    User.sync()

    module.exports = User



