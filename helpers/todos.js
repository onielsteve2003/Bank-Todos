const db = require('../models');
exports.getTodo = function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createTodo = function(req, res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.getTodos = function(req, res){
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        res.json(foundTodo)
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.updateTodos = function(req, res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body)
        .then(function(todo){
            req.json(todo);
        })
        .catch(function(err){
            res.send(err);
        });
}

exports.deleteTodos = function(req, res){
    db.Todo.remove({_id: req.params.todoId})
    .then(function(){
        res.json({message: 'Deleted!!!'})
    })
    .catch(function(err){
        res.send(err)
    })
}

module.exports = exports;