'use strict';

// Task list array
let tasks = [];

// Load tasks from local storage
function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
}

// Save tasks to local storage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add a new task
function addTask(task) {
    tasks.push({ text: task, completed: false });
    saveTasks();
}

// Delete task by index
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
}

// Toggle task completion
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
}

// Initialize tasks on page load
loadTasks();

// Example usage
addTask('Learn JavaScript');
addTask('Build a To-Do List');

tasks.forEach((task, index) => {
    console.log(`${task.completed ? '[✓]' : '[ ]'} ${task.text}`);
});