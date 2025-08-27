import { ProjectController } from "../Project-Controller/project-controller";

const controller = new ProjectController()

function renderProjects() {
  const projects = controller.getProject();
  const container = document.querySelector("#projects");
  container.innerHTML = "";

  projects.forEach((project) => {
    const div = document.createElement("div");
    div.textContent = project.name;

    project.getTodos().forEach((todo) => {
      const todoDiv = document.createElement("div");
      todoDiv.textContent = `${todo.title} (due: ${todo.dueDate})`;
      div.appendChild(todoDiv);
    });

    container.appendChild(div);
  });
}

export { renderProjects };