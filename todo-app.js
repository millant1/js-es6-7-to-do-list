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

const incomplete = todos.filter(function (todo){
    return !todo.completed
})
const summary = document.createElement('h2')
summary.textContent = `you have ${incomplete.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo){
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

// Listen for new todo creation

document.querySelector('#add-todo').addEventListener('click', function (e){
    console.log('Add a new todo')
})

//listen for todo text change
document.querySelector('#new-todo').addEventListener('input', function (e){
    console.log(e.target.value)
})