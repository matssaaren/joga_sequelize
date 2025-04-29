const express = require('express');
const router = express.Router();
const articleAdminController = require('../../controllers/admin/articleAdminController');

// Create
router.post('/create', articleAdminController.createArticle);

// Edit / Update
router.get('/edit/:id', articleAdminController.updateArticle);
router.post('/edit/:id', articleAdminController.updateArticle);

// Delete
router.post('/delete/:id', articleAdminController.deleteArticle);

module.exports = router;
