const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

const modles = require('../models');

const getAllArticles = async (req, res) => {
    modles.Article.findAll()
    .then(articles => {
        console.log(articles);
        res.status(200).json({articles});
    })
    .catch(err => {
        res.status(500).json(error.message);
    });
}

const getArticleBySlug = (req, res) => {
    modles.Article.findOne({
      where: {
        slug: req.params.slug
      },
        include: [{
            model: modles.Author
        }]
    })
    .then(article => {
      console.log(article);
      return res.status(200).json({ article });
    })
    .catch(error => {
      return res.status(500).send(error.message);
    });
  };
  

module.exports = {
    getAllArticles,
    getArticleBySlug
}