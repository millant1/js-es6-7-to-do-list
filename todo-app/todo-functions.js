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

// setup remove function 
const removeTodo = function (id){
    const todoIndex = todos.findIndex(function (todo){
        return todo.id === id
    })
    if (todoIndex > -1){
        todos.splice(todoIndex, 1)
    }

}
// Checkbox check the completed value for a given todo
const toggleTodo = function (id){
    const todo = todos.find(function (todo){
        return todo.id === id
    })
    
    if (todo !== undefined){
        todo.completed = !todo.completed
    }
}
// Generate the DOM structure for a todo
const generateTodoDOM = function (todo){
    const todoEl = document.createElement('div')
    const todoText = document.createElement('span')
    const checkbox = document.createElement('input')
    const removeButton = document.createElement('button')
//setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkbox)
        // Check todo checkbox
    checkbox.checked = todo.completed
    // listner for checkbox change and change the check box
    checkbox.addEventListener('change', function (e){
        toggleTodo(todo.id)
        saveTodos(todos)
        renderedTodos(todos, filters)
    })

// setup the span text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)
// setup the button
    removeButton.textContent = 'x'  
    todoEl.appendChild(removeButton) 
    removeButton.addEventListener('click', function (e){
        removeTodo(todo.id)
        saveTodos(todos)
        renderedTodos(todos, filters)
    })

       return todoEl
}
// Get the DOM elements for list summary
const getSummaryDOM = function (incomplete){
    const summary = document.createElement('h2')
    summary.textContent = `you have ${incomplete.length} todos left`
    return summary
}
