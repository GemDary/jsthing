const form  = document.querySelector('form')
const taskInput = document.querySelector('#task')
const taskList = document.querySelector('ul')
const delAllTasks = document.querySelector('#del-tasks')
const filterTasks = document.querySelector('#fil-tasks')

form.addEventListener('submit', addTask)
taskList.addEventListener('click', deleteTask)
delAllTasks.addEventListener('click', deleteAllTasks)
document.addEventListener('DOMContentLoaded', getTasks)
filterTasks.addEventListener('click', taskFilter)

function addTask(e){
    // create list item
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(taskInput.value))
    li.className = 'collection-item'
    const a = document.createElement('a')
    a.appendChild(document.createTextNode('X'))
    a.className = 'blue-text text-darken-2 secondary-content'
    a.setAttribute('href', '#')
    li.appendChild(a)
    // add to list
    const ul = document.querySelector('ul')
    ul.appendChild(li)
    addTaskLS(taskInput.value)
    taskInput.value = ''
    e.preventDefault()
}

function deleteTask(e){
    if(e.target.textContent == 'X'){
        if(confirm('Are you sure to delete this task?')){
            e.target.parentElement.remove()
            deleteTaskLS(e.target.parentElement.textContent.slice(0,-1))
        }
    }
}

function deleteAllTasks(e){
    //taskList.innerHTML = ''
    while (taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
    localStorage.removeItem('tasks')
}

function addTaskLS(task) {
    let tasks
    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function deleteTaskLS(task) {
    let tasks
    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach((taskLS, taskIndex) => {
        if(taskLS === task){
            tasks.splice(taskIndex, 1)
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function getTasks(){
    let tasks
    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach((task) => {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(task))
        li.className = 'collection-item'
        const a = document.createElement('a')
        a.appendChild(document.createTextNode('X'))
        a.className = 'blue-text text-darken-2 secondary-content'
        a.setAttribute('href', '#')
        li.appendChild(a)
        // add to list
        const ul = document.querySelector('ul')
        ul.appendChild(li)
    })
}

function taskFilter(){
    let tasks = document.querySelectorAll('li')
    let input = document.getElementById("taskfilter").value
    for (i = 0; i < tasks.length; i++){
        if (tasks[i].innerText.slice(0, -1).includes(input)){
            tasks[i].hidden = false
        }
        else {
            tasks[i].hidden = true
        }
    }
}
