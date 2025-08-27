class Todo {
    constructor(title, description, dueDate, 
        priority, notes, checklist) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
    }
    
}


function createTodo(title, description, dueDate, priority, notes, checklist) {
    const todo = new Todo(title, description, dueDate, priority, notes, checklist)
}



function updateTodo(todo, updates) {
   for (const key in updates) {
    if (todo.hasOwnProperty(key) && updates[key] !== undefined) {
        todo[key] = updates[key];
        }
    }
    return todo;
}








export {createTodo, updateTodo}