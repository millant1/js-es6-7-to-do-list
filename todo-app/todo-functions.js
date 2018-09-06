// Read existing todos from local storage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null){
       return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save the todos to Local Storage
const saveTodos = function (todos){
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render todos

const renderedTodos = function (todos, filters){
    let filteredTodos = todos.filter(function (todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    debugger
    filteredTodos = filteredTodos.filter(function (todo){
        if (filters.hideCompleted){
            return !todo.completed
        } else {
            return true
        }
    })
    

    const incomplete = filteredTodos.filter(function (todo){
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    
    
    document.querySelector('#todos').appendChild(getSummaryDOM(incomplete))
    
    filteredTodos.forEach(function (todo){
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
    
}

// Generate the DOM structure for a todo
const generateTodoDOM = function (todo){
    const p = document.createElement('p')
        p.textContent = todo.text
       return p
}

// Get the DOM elements for list summary
const getSummaryDOM = function (incomplete){
    const summary = document.createElement('h2')
    summary.textContent = `you have ${incomplete.length} todos left`
    return summary
}
