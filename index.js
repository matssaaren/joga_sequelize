const express = require('express');
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

sequelize.authenticate()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
const adminArticleRouter = require('./routes/admin/article');
const articleRouter = require('./routes/article');
const authorRouter = require('./routes/author');
app.use('/', articleRouter);
app.use('/articles', articleRouter);
app.use('/author', authorRouter);
app.use('/admin/article', adminArticleRouter);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000.');
});