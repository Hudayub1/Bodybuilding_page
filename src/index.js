import _ from 'lodash';
import './styles.css';
import { ProjectController } from "./Project-Controller/project-controller.js";
import { renderProjects } from './UI-DOM/renderProject.js';

const controller = new ProjectController();

// // add some test projects
// controller.addProject("Test Project 1");
// controller.addProject("Test Project 2");

// // log everything
// console.log("All projects:", controller.getProjects());
// const projectId = controller.projects[1].id;
// console.log("Project 1:", controller.getProject(projectId));

// console.log('hello there')

