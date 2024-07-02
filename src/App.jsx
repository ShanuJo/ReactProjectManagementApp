import { useState } from "react";
import Dashboard from "./components/Dashboard";
import ProjectDetails from "./components/ProjectDetails";
import ProjectModal from "./components/ProjectModal";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectstate, setProjectstate] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleSelectProject(id) {
    setProjectstate((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
    console.log('projectstate::',projectstate);

  }

  function handlecancelProject() {
    setProjectstate((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddStartProject() {
    setProjectstate((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleDeleteProject() {
    setProjectstate((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState?.selectedProjectId
        )
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectstate((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleAddTask(text) {
    setProjectstate((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })

    console.log('projectstatewithTask::',projectstate);

  }

  function handleDeleteTask(id) {
    setProjectstate((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        )
      };
    });
  }

  const selectedProject = projectstate.projects.find(
    (project) => project.id === projectstate?.selectedProjectId
  );
  let content = (
    <ProjectDetails
      project={selectedProject}
      onClearHandle={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectstate.tasks}
    />
  );

  if (projectstate.selectedProjectId === null) {
    content = (<ProjectModal onAdd={handleAddProject} handleCancel={handlecancelProject} />);
  } else if (projectstate.selectedProjectId === undefined) {
    content = (<Dashboard onClickHandle={handleAddStartProject} />);
  }

  return (
    <>
      <main className="h-screen my-8 flex flex-row">
        <Sidebar
          onClickHandle={handleAddStartProject}
          project={projectstate?.projects}
          onSelectProject={handleSelectProject}
          selectedProjectId={projectstate.selectedProjectId}
        />

        {content}

      </main>
    </>
  );
}

export default App;
