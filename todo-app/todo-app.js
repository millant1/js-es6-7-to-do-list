let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderedTodos(todos, filters)

//listen for todo text change
document.querySelector('#search-text').addEventListener('input', function (e){
    filters.searchText = e.target.value
    renderedTodos(todos, filters)
})

document.querySelector('#add-todo').addEventListener('submit', function (e){
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.newTodo.value, 
        completed:  false
    })
    
   saveTodos(todos)

    renderedTodos(todos, filters)
    e.target.elements.newTodo.value = ''
})

document.querySelector('#completed').addEventListener('change', function (e){
    filters.hideCompleted = e.target.checked
    renderedTodos(todos, filters)
})
