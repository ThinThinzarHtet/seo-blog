const express = require('express');
const router = express.Router();

// Controller
const { create, list, read, remove } = require('../controllers/tag');
const { requireSignin, adminMiddleware } = require('../controllers/auth');

// Validators
const { runValidation } = require('../validators');
const { createTagValidator } = require('../validators/tag');

// Create tag
router.post(
  '/tag',
  createTagValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);

// get all tags
router.get('/tags', list);

// get one tag
router.get('/tag/:slug', read);

// delete tag
router.delete('/tag/:slug', requireSignin, adminMiddleware, remove);

module.exports = router;
