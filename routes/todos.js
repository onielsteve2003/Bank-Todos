const express = require('express');
const router = express.Router();
const db = require('../models');
const helpers = require('../helpers/todos');

router.route('/')
    .get(helpers.getTodo)
    .post(helpers.createTodo)

router.route('/:todoId')
    .get(helpers.getTodos)
    .put(helpers.updateTodos)
    .delete(helpers.deleteTodos)

module.exports = router;