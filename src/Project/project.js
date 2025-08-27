import { updateTodo } from "./todo.js";

const projects = []


function editTodoInProject(project, todoId, updates) {
  const todo = project.todos.find(t => t.id === todoId);
  if (!todo) return null;        // not found: caller can handle this
  return updateTodo(todo, updates);
}