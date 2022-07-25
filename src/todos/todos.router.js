const router = require('express').Router()
const httpTodos = require("./todos.http")

router.route('/todos')
    .get(httpTodos.getAll) //ok
    .post(httpTodos.creTodo)


router.route("/todos/:id")
    .get(httpTodos.getById) //ok
    .put(httpTodos.updateById) // ok
    .delete(httpTodos.dellById) // ok

module.exports = {
    router
}