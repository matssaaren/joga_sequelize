const models = require('../../models');

// Create
const createArticle = async (req, res) => {
    try {
      const { name, slug, image, body, author_id, published } = req.body;
  
      await models.Article.create({
        name,
        slug,
        image,
        body,
        author_id,
        published: published || new Date()  // Kui "published" puudub, siis kasuta praegust kuupäeva
      });
  
      res.status(201).json({ message: 'Article created successfully!' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
  

// Update
const updateArticle = async (req, res) => {
  if (req.method === 'GET') {
    const article = await models.Article.findByPk(req.params.id);
    return res.status(200).json({ article });
  } else if (req.method === 'POST') {
    try {
      const { name, slug, image, body, author_id } = req.body;

      await models.Article.update(
        { name, slug, image, body, author_id },
        { where: { id: req.params.id } }
      );

      res.status(200).json({ message: 'Article updated successfully!' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Delete
const deleteArticle = async (req, res) => {
  try {
    await models.Article.destroy({
      where: { id: req.params.id }
    });

    res.status(200).json({ message: 'Article deleted successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createArticle,
  updateArticle,
  deleteArticle
};
