import { Project } from "../Project/project.js";
import { createTodo, updateTodo } from "../Todo/Todo.js";


export class ProjectController {
  constructor() {
    this.projects = [];
  }

  addProject(name) {
    const project = new Project(name);
    this.projects.push(project);
    return project;
  }

  addTodoToProject(projectId, todoData) {
    const project = this.getProject(projectId);
    if (!project) return null;
    project.addTodo(todo);
    return todo;
    }

  getProject(projectId) {
    return this.projects.find(p => p.id === projectId);
  }

  updateTodo(projectId, todoId, updates) {
    const project = this.getProject(projectId);
    if (!project) return null;

    const todo = project.todos.find(t => t.id === todoId);
    if (!todo) return null;

    return updateTodo(todo, updates);
  }

  deleteTodo(projectId, todoId) {
    const project = this.getProject(projectId);
    if (!project) return;
    project.removeTodo(todoId);
  }
}