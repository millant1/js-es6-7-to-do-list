const todos = [{
    text: 'Order cat food',
    completed: false
},{
    text: 'Clean kitchen',
    completed: true
},{
    text: 'Buy food',
    completed: true
},{
    text: 'Do work',
    completed: false
},{
    text: 'Exercise',
    completed: true

}
]


const filters = {
    searchText: ''
}

const renderedTodos = function (todos, filters){
    const filteredTodos = todos.filter(function (todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incomplete = filteredTodos.filter(function (todo){
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    
    const summary = document.createElement('h2')
    summary.textContent = `you have ${incomplete.length} todos left`
    document.querySelector('#todos').appendChild(summary)
    
    filteredTodos.forEach(function (todo){
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
    
}

renderedTodos(todos, filters)

 // Listen for new todo creation
 document.querySelector('#add-todo').addEventListener('click', function (e){
    console.log('Add a new todo')
})

//listen for todo text change
document.querySelector('#new-todo').addEventListener('input', function (e){
   console.log(e.target.value)
})

document.querySelector('#search-text').addEventListener('input', function (e){
    filters.searchText = e.target.value
    renderedTodos(todos, filters)
})