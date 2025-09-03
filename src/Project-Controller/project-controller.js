import { Project } from "../Project/project.js";
import { createTodo, updateTodo } from "../Todo/Todo.js";


export class ProjectController {
  #localStorageKey = undefined
  constructor(localStorageKey) {
    this.projects = [];
    this.#localStorageKey = localStorageKey
    this.#loadFromStorage()
  }

  addProject(name) {
    const project = new Project(name);
    this.projects.push(project);
    return project;
  }

  addTodoToProject(projectId, todoData) {
    const project = this.getProject(projectId);
    if (!project) return null;
    project.addTodo(todoData);
    return todoData;
    }

  getProjects() {
    return this.projects; 
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

   saveToStorage() {
      localStorage.setItem(this.#localStorageKey, JSON.stringify(this.projects))
    }

  #loadFromStorage() {
    this.projects = JSON.parse(localStorage.getItem(this.#localStorageKey)) || 
      [{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      }, {
      productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 2,
      deliveryOptionId: '2'
      }];
    }
}