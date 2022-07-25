const {getAllTodos, getTodoById, deleteTodo, createTodo, updateTodo} = require("./todos.controller")

const getAll = (req, res) => {
    const data = getAllTodos()
    res.status(200).json({
        items: data.length,
        response: data
    })
}

const getById = (req, res) =>{
    const id = Number(req.params.id)
    if(id){
        const data = getTodoById(id)
        if(data.id){
            res.status(200).json(data)
        }else {
            res.status(400).json({message: 'Invalid ID'})
        }
    }else {
        res.status(400).json({message: 'Id is not a number'})
    }
}

const dellById = (req, res) =>{
    const id = Number(req.params.id)
    if(id){
        const data = deleteTodo(id)
        if(!data.id){
            res.status(200).json(data)
        }else {
            res.status(400).json({message: 'Invalid ID'})
        }
    }else {
        res.status(400).json({message: 'Id is not a number'})
    }
}

const creTodo = (req, res) =>{
    const obj = req.body
    const data = createTodo(obj)
    res.status(200).json(data)
}

const updateById = (req, res) =>{
    const obj = req.body
    const id = Number(req.params.id)

    if (id === -1) {
        res.status(400).json({ message: "Invalid ID" });
    }else{
        const data = updateTodo(id, obj)
        res.status(201).json(data)
    }
}

module.exports = {
    getAll,
    getById,
    dellById,
    creTodo,
    updateById
}