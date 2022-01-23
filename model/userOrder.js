const express = require('express')
const Conn = require('../seq')
const Sequelize = require('sequelize')
const User = require('../model/usermodel')

const Order = Conn.define('order', {
    // attributes
    orderId: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
    
    },
    orderAmount: {
    type: Sequelize.STRING
    // allowNull defaults to true
    }
    }, {
    // options
    });

  User.hasMany(Order, {foreignKey: 'uId'});
//Order.belongsTo(User, {foreignKey: 'id'});

    Order.sync()
    

    module.exports = Order