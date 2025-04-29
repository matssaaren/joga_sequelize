const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

const Article = require('../models/article')(sequelize, Sequelize.DataTypes);

const getAllArticles = async (req, res) => {
    const articles = Article.findAll()
    .then(articles => {
        console.log(articles);
        res.status(200).json({articles});
    })
    .catch(err => {
        res.status(500).json(error.message);
    });
}

module.exports = {
    getAllArticles
}