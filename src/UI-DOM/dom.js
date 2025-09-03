// dom.js
import { ProjectController } from "../Project-Controller/project-controller.js";

const dom = document.addEventListener;

dom('DOMContentLoaded', function() {
  // Project section elements
  const projectForm = document.getElementById("project-form");
  const projectInput = document.getElementById("project-name");
  const projectList = document.getElementById("project-list");

  // Task section elements
  const taskForm = document.getElementById("task-form");
  const taskTitle = document.getElementById("task-title");
  const taskDesc = document.getElementById("task-desc");
  const taskDue = document.getElementById("task-due");
  const taskList = document.getElementById("task-list");

  // Keep track of selected project
  let activeProject = null;
})
  
export default dom;

