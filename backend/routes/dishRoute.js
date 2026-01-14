const express = require('express');
const router = express.Router();

const { getMenu, addMenuItem } = require('../controllers/menuController');

// GET all dishes
router.get('/', getMenu);

// POST add dish
router.post('/', addMenuItem);

module.exports = router;
