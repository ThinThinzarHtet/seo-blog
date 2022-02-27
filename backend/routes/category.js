const express = require('express');
const router = express.Router();
const { create, list, read, remove } = require('../controllers/category');

// Validators
const { runValidation } = require('../validators');
const { categoryCreateValidator } = require('../validators/category');
const { requireSignin, adminMiddleware } = require('../controllers/auth');

// Create category
router.post(
  '/category',
  categoryCreateValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);

router.get('/categories', list); //get all categories
router.get('/category/:slug', read); //get single category
router.delete('/category/:slug', requireSignin, adminMiddleware, remove);

module.exports = router;
