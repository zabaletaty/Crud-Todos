const todos = [
    {
        id:1,
        title: "comer",
        description: "comer saludable",
        finished: false
    },
    {
        id:2,
        title:"Dormir",
        description:"8 Horas",
        finished: true
    }
]

const getAllTodos = () =>{
    return todos;
}

const getTodoById = (id) =>{
    const filteredTD = todos.filter(e => e.id === id)
    return filteredTD[0]
}

const createTodo = (data) =>{
    if(todos.length === 0 ){
        const newTodo = {
            id: 1,
            title: data.title,
            description: data.description,
            finished: data.finished
        }
        todos.push(newTodo);
        return newTodo;
    }else{
        const newTodo = {
            id: todos[todos.length - 1].id + 1,
            title: data.title,
            description: data.description,
            finished: data.finished
        }
        todos.push(newTodo);
        return newTodo
    }
}

const deleteTodo = (id) =>{
    const index = todos.findIndex(e => e.id === id)
    if(index != -1){
        todos.splice(index, 1)
        return todos
    }else{
        console.log("user not found")
    }
}

const updateTodo = (id, data) =>{
    const index = todos.findIndex(e => e.id == id);
    if(data.title && data.description && data.finished){
        todos[index] = {
            id,
            title: data.title,
            description: data.description,
            finished: data.finished
        }
        return todos[index]
    }else{
        console.log("Todo not found")
    }
}

module.exports = {
    getAllTodos,
    getTodoById,
    deleteTodo,
    createTodo,
    updateTodo
}