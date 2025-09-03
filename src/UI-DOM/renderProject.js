import { ProjectController } from "../Project-Controller/project-controller";

export const controller = new ProjectController()

function renderProjects() {
  const projects = controller.getProjects(projectId);
  const container = document.querySelector("project-list");
  container.innerHTML = "";

  projects.forEach((project) => {
    const projectList = document.createElement("project-list-create");
    projectList.innerHTML = `${project.name}`

    project.getTodos().forEach((todo) => {
      const todoDiv = document.createElement("div");
      todoDiv.textContent = `${todo.title} (due: ${todo.dueDate})`;
      div.appendChild(todoDiv);
    });

    container.appendChild(div);
  });
}

export { renderProjects };